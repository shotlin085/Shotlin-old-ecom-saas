import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlurBox from "@/components/layout component/BlurBox.component";

export default function FlashMessagePage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Retrieve the message and orderId from router state. Provide defaults if not set.
  const message = state?.message || "Your order has been confirmed successfully!";
  const orderId = state?.orderId || "Unknown";

  useEffect(() => {
    // Redirect to home page (or another page) after 5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[radial-gradient(circle_at_center,_#001466_0%,_#000003_100%)] px-3 py-8">
      <BlurBox className="max-w-md w-full shadow-lg text-white animate-fadeIn"
       style={{
        background: "hsla(220, 35%, 3%, 0.4)",
        borderColor: "rgb(71, 71, 71)",
      }}>
        <CardHeader className="border-b border-gray-700">
          <CardTitle className="text-2xl font-bold text-green-400">
            Order Confirmation
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-lg text-gray-300">{message}</p>
          <p className="text-gray-500 mt-2">Order ID: {orderId}</p>
          <p className="mt-4 text-sm text-gray-400">
            Redirecting to home page in 5 seconds...
          </p>
          <div className="mt-6">
            <Button variant="outline" onClick={() => navigate("/")}>
              Go Home Now
            </Button>
          </div>
        </CardContent>
      </BlurBox>
    </div>
  );
}
