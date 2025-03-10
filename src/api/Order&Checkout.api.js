import axios from "axios";
import api from "@/api/config.api";



 const DiscountCodeApi = async (ProductsPrice,DiscountCoupon) => {
    try {
    const response = await axios.post(`${api}/v1/orders/get-discount-price`, {
        ProductsPrice,
        DiscountCoupon,
    },{withCredentials:true});
        return response.data; // Return the actual data
    } catch (error) {
        throw new Error("Failed to fetch discount code");
    }
 }

 
 const createOrder = async (orderData) => {
    try {
      const response = await axios.post(
        `${api}/v1/orders/create-order`,
        {
          products: orderData.products, // Ensure this contains the correct product data
          paymentType: orderData.paymentType,
          DiscountCoupon: orderData.DiscountCoupon,
          shippingAddress: orderData.shippingAddress,
        },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.log("Error creating order:", error.response?.data.data.error);
      throw new Error("Failed to create order");
    }
  };
  


const ordervarify = async (verifyPayload) => {
  console.log(verifyPayload);
  try {
    const response = await axios.post(`${api}/v1/orders/order-varify`, {
        razorpay_payment_id: verifyPayload.razorpay_payment_id,
        razorpay_order_id: verifyPayload.razorpay_order_id,
        razorpay_signature: verifyPayload.razorpay_signature,
        orderId: verifyPayload.orderId,
    }, { withCredentials: true });
    return response.data; // Return the actual data
  } catch (error) {
    throw new Error("Failed to verify order", error.response?.data.data.error);
  }
}




const UserOrder = async (method) => {
  try {
    console.log(method);
    const response = await axios.get(`${api}/v1/orders/get-orders?${method}`, 
      { withCredentials: true });
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch user orders");
  }
}




export  {DiscountCodeApi,createOrder,ordervarify,UserOrder};




