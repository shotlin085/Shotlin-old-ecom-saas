import { useState, useEffect } from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useParams, useNavigate } from "react-router-dom";
import ProductDetailsApi from "@/api/ProductDetails.api";
import { useQueryClient } from "@tanstack/react-query";
import BlurBox from "@/components/layout component/BlurBox.component";
import { CheckCircle, X } from "lucide-react";

// All API imports
import { DiscountCodeApi, createOrder, ordervarify } from "../../api/Order&Checkout.api.js";
import { newAddress, userAddress } from "../../api/UserDataUpdate.api.js";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { product_id } = useParams();
  const [productData, setProductData] = useState(null);


  useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (!product_id) throw new Error("Invalid product ID");

        // Check for cached data
        const cachedProduct = queryClient.getQueryData(["product", product_id]);
        if (cachedProduct) {
          setProductData(cachedProduct);
        } else {
          const data = await ProductDetailsApi(product_id);
          setProductData(data);
          queryClient.setQueryData(["product", product_id], data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, [product_id, queryClient]);

  // Address state & functions for address selection
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("new"); // Default to "new" address
  const [isAddressSaved, setIsAddressSaved] = useState(false);
  const [errors, setErrors] = useState({});

  // New state for the phone country code (default to +1)
  const [phoneCountryCode, setPhoneCountryCode] = useState("+1");

  const [address, setAddress] = useState({
    id: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    name: "",
    phone: "",
    company: "",
    gstNumber: "",
  });

  // Fetch saved addresses from the backend
  useEffect(() => {
    const fetchUserAddress = async () => {
      try {
        const data = await userAddress(); // Replace with your actual API call
        const newAddresses = data.map((addr) => ({
          id: addr._id.toString(),
          label: addr.FullName,
          details: {
            country: addr.Country,
            street: addr.Address,
            city: addr.City,
            state: addr.State,
            zip: addr.Pincode,
            name: addr.FullName,
            phone: addr.MobileNumber,
            company: addr.CompanyName || "",
            gstNumber: addr.GSTIN || "",
          },
        }));
        setSavedAddresses(newAddresses);
        if (newAddresses.length > 0) {
          setSelectedAddress(newAddresses[0].id);
          setAddress(newAddresses[0].details);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserAddress();
  }, []);

  // Handle address selection change
  const handleAddressSelection = (value) => {
    setSelectedAddress(value);
    if (value === "new") {
      setAddress({
        country: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        name: "",
        phone: "",
        company: "",
        gstNumber: "",
      });
    } else {
      const selected = savedAddresses.find((addr) => addr.id === value);
      if (selected) setAddress(selected.details);
    }
    // Clear any existing errors when changing address
    setErrors({});
  };

  // Validate required form fields (skip optional ones)
  const validateForm = () => {
    const newErrors = {};
  
    // Name (Required)
    if (!address.name.trim()) {
      newErrors.name = "Full Name is required";
    }
  
    // Phone (Required, digits only)
    if (!address.phone.trim() && !/^[0-9]+$/.test(address.phone.trim())) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9]+$/.test(address.phone.trim())) {
      newErrors.phone = "Phone Number must contain only digits";
    }
  
    // Street (Required)
    if (!address.street.trim()) {
      newErrors.street = "Street Address is required";
    }
  
    // City (Required)
    if (!address.city.trim()) {
      newErrors.city = "City is required";
    }
  
    // State (Required)
    if (!address.state.trim()) {
      newErrors.state = "State is required";
    }
  
    // ZIP (Required, digits only)
    if (!address.zip.trim() && !/^[0-9]+$/.test(address.zip.trim())) {
      newErrors.zip = "ZIP Code is required";
    } else if (!/^[0-9]+$/.test(address.zip.trim())) {
      newErrors.zip = "ZIP Code must contain only digits";
    }
  
    // Country (Required)
    if (!address.country.trim()) {
      newErrors.country = "Country is required";
    }
  
    return newErrors;
  };
  

  // Coupon state & functions
  const [coupon, setCoupon] = useState("");
  const [isDiscountValid, setIsDiscountValid] = useState(false);
  const [discountError, setDiscountError] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [discountMessage, setDiscountMessage] = useState(0);

  // Function to validate the coupon code
  const validateCoupon = (DiscountCoupon) => {
    let ProductsPrice = productData?.price;
    DiscountCodeApi(ProductsPrice, DiscountCoupon)
      .then((response) => {
        if (response.statusCode === 200) {
          setDiscountedPrice(Number(response.data.discount.discountValue.toFixed(2)));
          setDiscountMessage(response.data.discount.discountType);
          setDiscountError("");
          setIsDiscountValid(true);
        } else {
          setDiscountError("Invalid coupon code");
          setIsDiscountValid(false);
          setDiscountedPrice(null);
        }
      })
      .catch(() => {
        setDiscountError("Invalid coupon code");
        setIsDiscountValid(false);
        setDiscountedPrice(null);
      });
  };

  const handleApplyCoupon = () => {
    validateCoupon(coupon);
  };

  // Function to remove the coupon code
  const handleRemoveCoupon = () => {
    setCoupon("");
    setIsDiscountValid(false);
    setDiscountMessage(0);
    setDiscountedPrice(null); // Reset price to original
  };

  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [agreed, setAgreed] = useState(false);

  // Price calculations
  const [tex, setTex] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    const calculatedTax = ((productData?.price - (discountedPrice || 0)) * 0.18) || 0;
    setTex(Number(calculatedTax.toFixed(2)));

    const calculatedFinalPrice = (productData?.price + calculatedTax - (discountedPrice || 0)) || 0;
    setFinalPrice(Number(calculatedFinalPrice.toFixed(2)));
  }, [productData, discountedPrice]);

  const [chechoutbox, setChechoutbox] = useState(true);

  // --- Order Creation & Razorpay Integration ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields only when using a new address
    if (selectedAddress === "new") {
      const formErrors = validateForm();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return; // Stop submission if there are errors
      }
    }

    // Check if the address is saved or new
    let addressId = selectedAddress;
    if (selectedAddress === "new" && isAddressSaved) {
      const savedAddress = await newAddress(address);
      addressId = savedAddress._id;
    }

    // Build the order data
    const orderData = {
      products: [{ product: productData._id, quantity: 1 }],
      DiscountCoupon: isDiscountValid ? coupon : null,
      paymentType: paymentMethod,
      shippingAddress: addressId,
    };

    try {
      // Create the order
      let data;
      try {
        data = await createOrder(orderData);
        console.log(data);
        setChechoutbox(false);
      } catch (error) {
        console.error("Order creation failed:", error);
        return; // Exit if order creation fails
      }

      const { razorpayOrder, orderId } = data.data;

      // Razorpay payment flow
      if (paymentMethod === "razorpay") {
        const options = {
          key: "rzp_test_eVN0FscTOIsBqP", // Replace with your Razorpay API key
          amount: razorpayOrder.amount,
          currency: razorpayOrder.currency,
          name: productData.name,
          description: "Purchase Product",
          order_id: razorpayOrder.id,
          handler: async (paymentResponse) => {
            try {
              const verifyPayload = {
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_signature: paymentResponse.razorpay_signature,
                orderId: orderId,
              };
              const verifyResponse = await ordervarify(verifyPayload);
              console.log("Payment verified:", verifyResponse.data);

              // Navigate to order confirmation page
              navigate(`/${orderId}/orderconfirm/${productData._id}`, {
                state: {
                  message: "Payment successful! Your order has been confirmed.",
                  orderId: orderId,
                },
              });
            } catch (verifyError) {
              console.error("Payment verification failed:", verifyError);
            }
          },
          prefill: {
            name: address.name,
            contact: address.phone,
          },
          theme: {
            color: "#05071A",
          },
          // Add the modal property
          modal: {
            ondismiss: () => {
              // This function runs when the user closes the Razorpay modal
              console.log("User closed the Razorpay modal");
              setChechoutbox(true); // Re-show your checkout box or handle accordingly
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        // Handle other payment methods if needed.
      }
    } catch (error) {
      console.error("Order creation failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[radial-gradient(circle_at_center,_#001466_0%,_#000003_100%)] px-3 py-8">
      {chechoutbox && (
        <BlurBox
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg p-6 rounded-2xl"
          style={{
            background: "hsla(220, 35%, 3%, 0.4)",
            borderColor: "rgb(71, 71, 71)",
          }}
        >
          {/* Left Section - Subscription Details */}
          <BlurBox
            className="bg-gray-700 p-6 rounded-lg"
            style={{
              background: "hsla(220, 35%, 3%, 0.4)",
              borderColor: "rgb(71, 71, 71)",
            }}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-gray-100 font-semibold">
                {productData?.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={productData?.image[0]}
                alt="Product"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <p className="text-4xl font-bold">
                ${productData?.price}{" "}
                <span className="text-sm text-green-400">SAVE 30%</span>
              </p>
              <ul className="mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
                {productData?.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-check text-green-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-gray-600 pt-4 text-sm">
                <p>Subtotal: ₹{productData?.price}</p>
                {discountedPrice && <p>Discount: ₹{discountedPrice}</p>}
                <p>Tax: ₹{tex}</p>
                <p className="text-lg font-semibold">Total: ₹{finalPrice}</p>
              </div>
            </CardContent>
          </BlurBox>

          {/* Right Section - Payment Details */}
          <BlurBox
            className="p-6 rounded-lg"
            style={{
              background: "hsla(220, 35%, 3%, 0.4)",
              borderColor: "rgb(71, 71, 71)",
            }}
          >
            <CardHeader>
              <CardTitle className="text-lg text-gray-100 font-semibold">
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Wrap address fields in a form */}
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4 p-4 bg-gray-800 rounded-lg">
                    {/* Saved Address Selector */}
                    {savedAddresses.length > 0 && (
                      <div>
                        <Label className="text-gray-300">Saved Addresses</Label>
                        <Select
                          onValueChange={handleAddressSelection}
                          value={selectedAddress}
                        >
                          <SelectTrigger className="bg-gray-700 border-gray-600 text-white rounded-lg p-2 w-full">
                            {selectedAddress === "new"
                              ? "Use a new address"
                              : savedAddresses.find(
                                  (addr) => addr.id === selectedAddress
                                )?.label}
                          </SelectTrigger>
                          <SelectContent className="max-h-80 bg-gray-700 w-full max-w-full">
                            <SelectItem
                              value="new"
                              className="py-2 px-4 hover:bg-gray-600 rounded-lg"
                            >
                              Use a new address
                            </SelectItem>
                            {savedAddresses.map((addr) => (
                              <SelectItem
                                key={addr.id}
                                value={addr.id}
                                className="py-2 px-4 hover:bg-gray-600 rounded-lg"
                              >
                                <div>
                                  <span className="font-semibold">
                                    {addr.label}
                                  </span>
                                  <p className="text-sm text-gray-400">
                                    {addr.details.street}, {addr.details.city},{" "}
                                    {addr.details.zip}
                                  </p>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* New Address Input Fields */}
                    {selectedAddress === "new" && (
                      <>
                        <div className="grid grid-cols-1 gap-3">
                          {/* Full Name */}
                          <Label className="text-gray-300">Full Name</Label>
                          <Input
                            placeholder="John Doe"
                            value={address.name}
                            onChange={(e) =>
                              setAddress({ ...address, name: e.target.value })
                            }
                            className="bg-gray-700 border-gray-600 text-white rounded-lg p-2"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs">
                              {errors.name}
                            </p>
                          )}

                          {/* Phone Number with Country Code Selector */}
                          <Label className="text-gray-300">Phone Number</Label>
                          <div className="flex items-center space-x-2">
                            {/* Fixed-width wrapper for the country-code Select */}
                            <div className="w-20">
                              <Select
                                onValueChange={setPhoneCountryCode}
                                value={phoneCountryCode}
                              >
                                <SelectTrigger className="bg-gray-700 border-gray-600 text-white px-3 py-2 w-full rounded-lg">
                                  {phoneCountryCode}
                                </SelectTrigger>
                                <SelectContent className="max-h-80 bg-gray-700">
                                  <SelectItem value="+91">+91</SelectItem>
                                  <SelectItem value="+1">+1</SelectItem>
                                  <SelectItem value="+44">+44</SelectItem>

                                  {/* More country codes as needed */}
                                </SelectContent>
                              </Select>
                            </div>

                            {/* Phone number input grows to fill remaining space */}
                            <Input
                              type="tel"
                              placeholder="9675678903"
                              value={address.phone}
                              onChange={(e) =>
                                setAddress({
                                  ...address,
                                  phone: e.target.value,
                                })
                              }
                              className="bg-gray-700 border-gray-600 text-white px-3 py-2 rounded-lg flex-1"
                            />
                          </div>

                          {/* Error message if validation fails */}
                          {errors.phone && (
                            <p className="text-red-500 text-xs">
                              {errors.phone}
                            </p>
                          )}

                          {/* Company (Optional) */}
                          <Label className="text-gray-300">
                            Company (Optional)
                          </Label>
                          <Input
                            placeholder="Enter Company Name"
                            value={address.company}
                            onChange={(e) =>
                              setAddress({
                                ...address,
                                company: e.target.value,
                              })
                            }
                            className="bg-gray-700 border-gray-600 text-white rounded-lg p-2"
                          />

                          {/* Billing Address */}
                          <Label className="text-gray-300">
                            Billing Address
                          </Label>
                          <Input
                            placeholder="Street Address"
                            value={address.street}
                            onChange={(e) =>
                              setAddress({ ...address, street: e.target.value })
                            }
                            className="bg-gray-700 border-gray-600 text-white rounded-lg p-2"
                          />
                          {errors.street && (
                            <p className="text-red-500 text-xs">
                              {errors.street}
                            </p>
                          )}
                          <Input
                            placeholder="City"
                            value={address.city}
                            onChange={(e) =>
                              setAddress({ ...address, city: e.target.value })
                            }
                            className="bg-gray-700 border-gray-600 text-white rounded-lg p-2"
                          />
                          {errors.city && (
                            <p className="text-red-500 text-xs">
                              {errors.city}
                            </p>
                          )}
                          <Input
                            placeholder="State"
                            value={address.state}
                            onChange={(e) =>
                              setAddress({ ...address, state: e.target.value })
                            }
                            className="bg-gray-700 border-gray-600 text-white rounded-lg p-2"
                          />
                          {errors.state && (
                            <p className="text-red-500 text-xs">
                              {errors.state}
                            </p>
                          )}
                          <Input
                            placeholder="ZIP Code"
                            value={address.zip}
                            onChange={(e) =>
                              setAddress({ ...address, zip: e.target.value })
                            }
                            className="bg-gray-700 border-gray-600 text-white rounded-lg p-2"
                          />
                          {errors.zip && (
                            <p className="text-red-500 text-xs">{errors.zip}</p>
                          )}

                          {/* Country Selection */}
                          <Label className="text-gray-300">Country</Label>
                          <Select
                            onValueChange={(value) =>
                              setAddress({ ...address, country: value })
                            }
                            value={address.country}
                          >
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white rounded-lg p-2 w-full">
                              {address.country || "Select a country"}
                            </SelectTrigger>
                            <SelectContent className="max-h-80 bg-gray-700 w-full max-w-full">
                              <SelectItem value="India">India</SelectItem>
                              <SelectItem value="United States">
                                United States
                              </SelectItem>
                              <SelectItem value="United Kingdom">
                                United Kingdom
                              </SelectItem>
                              <SelectItem value="Canada">Canada</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.country && (
                            <p className="text-red-500 text-xs">
                              {errors.country}
                            </p>
                          )}

                          {/* GST Number (Optional) */}
                          <Label className="text-gray-300">
                            GST Number (Optional)
                          </Label>
                          <Input
                            placeholder="Enter GST Number"
                            value={address.gstNumber}
                            onChange={(e) =>
                              setAddress({
                                ...address,
                                gstNumber: e.target.value,
                              })
                            }
                            className="bg-gray-700 border-gray-600 text-white rounded-lg p-2"
                          />
                        </div>

                        {/* Save Address Checkbox */}
                        <Label className="flex items-center space-x-2 cursor-pointer text-white">
                          <Checkbox
                            checked={isAddressSaved}
                            onCheckedChange={() =>
                              setIsAddressSaved(!isAddressSaved)
                            }
                          />
                          <span>Save this address</span>
                        </Label>
                      </>
                    )}
                  </div>

                  {/* Hidden submit button for form submission via Enter key */}
                  <button type="submit" className="hidden">
                    Submit
                  </button>
                </form>

                {/* Discount Coupon Section */}
                <Label className="text-gray-300">Discount Coupon</Label>
                <div className="w-full max-w-md mx-auto">
                  {!isDiscountValid ? (
                    <div className="flex items-center bg-gray-800 text-white p-3 rounded-lg w-full">
                      <input
                        type="text"
                        placeholder="Enter promo code"
                        value={coupon}
                        onChange={(e) => {
                          setCoupon(e.target.value);
                          setDiscountError("");
                          setIsDiscountValid(false);
                        }}
                        className="bg-gray-700 border border-gray-600 text-white rounded-lg p-2 w-full"
                      />
                      <button
                        onClick={handleApplyCoupon}
                        disabled={!coupon}
                        className="ml-2 text-blue-400 hover:text-blue-500"
                      >
                        Apply
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center bg-green-100 border border-green-400 p-3 rounded-lg w-full">
                      <CheckCircle className="text-green-500" size={24} />
                      <div className="ml-2 text-gray-800">
                        <strong>{coupon}</strong>
                        <p>{discountMessage}</p>
                      </div>
                      <button
                        onClick={handleRemoveCoupon}
                        className="ml-auto text-gray-600 hover:text-gray-800"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  )}

                  {discountError && (
                    <p className="text-red-500 text-sm mt-2">{discountError}</p>
                  )}

                  <p className="text-white mt-3">
                    {discountedPrice !== null
                      ? `Discounted Price: $${discountedPrice.toFixed(2)}`
                      : `Original Price: $${productData?.price.toFixed(2)}`}
                  </p>
                </div>

                {/* Payment Method */}
                <Label className="text-gray-300">Payment Method</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="razorpay" id="razorpay" />
                    <Label htmlFor="razorpay" className="text-gray-300">
                      Razorpay
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="creditCard" id="creditCard" />
                    <Label htmlFor="creditCard" className="text-gray-300">
                      Credit Card
                    </Label>
                  </div>
                </RadioGroup>

                {/* Terms and Conditions */}
                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={setAgreed}
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the Terms and Conditions
                  </Label>
                </div>

                {/* Complete Purchase Button */}
                {productData?.stock === 0 && (
                  <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 transition rounded-lg py-2 text-lg font-medium">
                    Out of Stock
                  </Button>
                )}
                {productData?.stock > 0 && (
                  <Button
                    disabled={!agreed}
                    className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700 transition rounded-lg py-2 text-lg font-medium"
                    onClick={handleSubmit}
                  >
                    Complete Purchase
                  </Button>
                )}
              </div>
            </CardContent>
          </BlurBox>
        </BlurBox>
      )}
    </div>
  );
}
