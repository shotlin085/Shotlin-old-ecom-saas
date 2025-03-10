import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {ordervarify } from "@/api/Order&Checkout.api";

export default function PaymentPage() {
  const { orderId } = useParams();
  const location = useLocation();
  // The razorpayOrder is passed via state from CheckoutPage.
  // Alternatively, you can fetch order details by orderId.
  const razorpayOrder = location.state?.razorpayOrder;

  useEffect(() => {
    // Function to load the Razorpay script
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };

    const displayRazorpay = async () => {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      
      // If the Razorpay order was not passed in state, you might fetch it here.
      if (!razorpayOrder) {
        alert("Order details not found.");
        return;
      }

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
        amount: razorpayOrder.amount, // Amount in subunits (e.g., paise)
        currency: razorpayOrder.currency,
        name: "Your Company Name",
        description: "Order Payment",
        order_id: razorpayOrder.id,
        handler: async function (response) {
          // On successful payment, verify on your backend
          const verifyPayload = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            orderId, // your own order id
          };

          try {
            const verifyRes = await ordervarify(verifyPayload);

            const verifyData = await verifyRes.json();
            if (verifyRes.ok) {
              alert("Payment Successful!");
              // Optionally redirect to an order confirmation or success page
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.error("Verification error:", error);
            alert("An error occurred during payment verification.");
          }
        },
        prefill: {
          // Optionally prefill customer information if available
           name: razorpayOrder.shippingAddress?.name,
           email: "customer@example.com",
           contact: razorpayOrder.shippingAddress?.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };

    displayRazorpay();
  }, [orderId, razorpayOrder]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h2 className="text-xl font-semibold">Processing Payment...</h2>
    </div>
  );
}
