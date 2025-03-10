import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BlurBox from "@/components/layout component/BlurBox.component";
import { UserOrder } from "@/api/Order&Checkout.api";

// Example static data (if needed elsewhere)
const staticOrdersData = [
  {
    id: "5202712310431222",
    product: "TripSet — Travel Agency",
    subtitle: "Travel Agency Template",
    image:
      "https://res.cloudinary.com/shotlin/image/upload/f_auto,q_auto:low,w_500/c_fill,dpr_auto,f_avif,q_auto:eco,w_800/v1/images/1738254682891?_a=BAMCkGa40",
    date: "02/04/2023 10:50 AM",
    status: "Delivered",
    price: 455,
  },
  {
    id: "5202712310431221",
    product: "Bambon — Multipurpose",
    subtitle: "Multipurpose Template",
    image:
      "https://res.cloudinary.com/shotlin/image/upload/f_auto,q_auto:low,w_500/c_fill,dpr_auto,f_avif,q_auto:eco,w_800/v1/images/1738251095336?_a=BAMCkGa40",
    date: "02/04/2023 10:50 AM",
    status: "Shipped",
    price: 299,
  },
  {
    id: "5202712310431220",
    product: "Clickoy — Corporate",
    subtitle: "Corporate Template",
    image:
      "https://res.cloudinary.com/shotlin/image/upload/f_auto,q_auto:low,w_500/c_fill,dpr_auto,f_avif,q_auto:eco,w_800/v1/images/1738250358896?_a=BAMCkGa40",
    date: "02/04/2023 10:50 AM",
    status: "Cancelled",
    price: 299,
  },
];

// Helper function to return a badge based on order status
const getStatusBadge = (status) => {
  switch (status) {
    case "Delivered":
      return <Badge className="bg-green-600 text-white">Delivered</Badge>;
    case "Shipped":
      return <Badge className="bg-yellow-500 text-black">Shipped</Badge>;
    case "Cancelled":
      return <Badge className="bg-red-600 text-white">Cancelled</Badge>;
    default:
      return <Badge className="bg-gray-600 text-white">{status}</Badge>;
  }
};

// Helper function to truncate text to a given number of words and append an ellipsis.
const truncateWords = (text, maxWords = 3) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + " ..."
    : text;
};

// Mobile layout order card component
const OrderCard = React.memo(({ order }) => {
  const statusBadge = useMemo(() => getStatusBadge(order.status), [order.status]);

  return (
    <BlurBox
      key={order.id}
      className="p-4 rounded-md shadow-sm border"
      style={{
        background:
          "linear-gradient(rgb(0 6 112 / 20%) 0%, rgb(0 8 169 / 22%) 130%)",
        borderColor: "rgb(71, 71, 71)",
      }}
    >
      {/* Order # and Date */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">Order #</span>
        <span className="text-sm">{order.id}</span>
      </div>
      {/* Product & Image */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src={order.image}
          alt={order.product}
          loading="lazy"
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <p className="font-medium">{order.product}</p>
          <p className="text-xs text-gray-300">{order.subtitle}</p>
        </div>
      </div>
      {/* Status */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">Status</span>
        {statusBadge}
      </div>
      {/* Total */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">Total</span>
        <span>${order.price}</span>
      </div>
      {/* Actions */}
      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </div>
    </BlurBox>
  );
});

// Table layout order row component
const OrderRow = React.memo(({ order }) => {
  const statusBadge = useMemo(() => getStatusBadge(order.status), [order.status]);
  return (
    <tr className="border-b border-[#1F3A66] hover:bg-[#0a0722] transition-colors">
      <td className="py-4 px-4 hidden lg:table-cell whitespace-nowrap">
        {order.id}
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <img
            src={order.image}
            alt={order.product}
            loading="lazy"
            className="h-12 w-12 object-cover rounded"
          />
          <div>
            <span className="block font-medium">{order.product}</span>
            <span className="block text-xs text-gray-300">
              {order.subtitle}
            </span>
          </div>
        </div>
      </td>
      <td className="py-4 px-4">{statusBadge}</td>
      <td className="py-4 px-4 hidden md:table-cell">{order.date}</td>
      <td className="py-4 px-4">${order.price}</td>
      <td className="py-4 px-4">
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </td>
    </tr>
  );
});

export default function MyOrders() {
  // Read query parameters from the URL
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const initialFilter = searchParams.get("filter") || "";

  const [ordersData, setOrdersData] = useState([]);
  const [orderPage, setOrderPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [filterType, setFilterType] = useState(initialFilter); // "" means no filter

  // Update the URL whenever orderPage or filterType changes
  useEffect(() => {
    const params = { page: orderPage };
    if (filterType) {
      params.filter = filterType;
    }
    setSearchParams(params);
  }, [orderPage, filterType, setSearchParams]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Pass orderPage and filterType if API supports filtering via query string.
        const filterQuery = filterType ? `&filter=${filterType}` : "";
        // Note: Adjust the parameter format as required by your API.
        const orders = await UserOrder(`page=${orderPage}${filterQuery}`);
        const allOrders = orders.docs.map((order) => ({
          id: order.orderId,
          // Truncate product name and title to a specified number of words
          product: truncateWords(order.products[0].product?.name, 3),
          subtitle: truncateWords(order.products[0].product?.title, 3),
          image: order.products[0].product?.image[0],
          // Convert date to "YYYY - MM - DD" format
          date: order.orderedAt
            ? new Date(order.orderedAt)
                .toISOString()
                .split("T")[0]
                .split("-")
                .join(" - ")
            : "",
          status: order.orderStatus,
          // Convert totalAmount to two decimals
          price: order.totalAmount ? order.totalAmount.toFixed(2) : "",
        }));
        setOrdersData(allOrders);
        setTotalPages(orders.totalPages);
        console.log("Fetched orders:", allOrders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    fetchOrders();
  }, [orderPage, filterType]);

  // Handlers to change pages
  const handlePreviousPage = () => {
    if (orderPage > 1) {
      setOrderPage(orderPage - 1);
    }
  };

  const handleNextPage = () => {
    if (orderPage < totalPages) {
      setOrderPage(orderPage + 1);
    }
  };

  // Render page buttons from 1 to totalPages
  const renderPageButtons = () => {
    return Array.from({ length: totalPages }, (_, i) => {
      const page = i + 1;
      return (
        <Button
          key={page}
          onClick={() => setOrderPage(page)}
          variant={page === orderPage ? "default" : "outline"}
          className={`px-3 py-1 ${
            page === orderPage ? "bg-blue-600 text-white" : ""
          }`}
        >
          {page}
        </Button>
      );
    });
  };

  // Filter UI: selecting a filter resets the page to 1
  const renderFilterOptions = () => {
    return (
      <div className="flex flex-wrap justify-end gap-2 mb-4">
        <Button
          variant={filterType === "lastThreeMonths" ? "default" : "outline"}
          onClick={() => {
            setOrderPage(1);
            setFilterType("lastThreeMonths");
          }}
          className="px-3 py-1"
        >
          Last 3 Months
        </Button>
        <Button
          variant={filterType === "returnedProducts" ? "default" : "outline"}
          onClick={() => {
            setOrderPage(1);
            setFilterType("returnedProducts");
          }}
          className="px-3 py-1"
        >
          Returned Products
        </Button>
        <Button
          variant={filterType === "lastYearDelivered" ? "default" : "outline"}
          onClick={() => {
            setOrderPage(1);
            setFilterType("lastYearDelivered");
          }}
          className="px-3 py-1"
        >
          Last Year Delivered
        </Button>
        {/* Option to clear filter */}
        {filterType && (
          <Button
            variant="outline"
            onClick={() => {
              setOrderPage(1);
              setFilterType("");
            }}
            className="px-3 py-1"
          >
            Clear Filter
          </Button>
        )}
      </div>
    );
  };

  // Mobile layout (visible on screens smaller than md)
  const mobileLayout = useMemo(
    () => (
      <div className="block md:hidden space-y-4">
        {ordersData.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    ),
    [ordersData]
  );

  // Table layout (visible on screens md and up)
  const tableLayout = useMemo(
    () => (
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#0b051b]">
              <th className="py-3 px-4 hidden lg:table-cell font-semibold text-left uppercase text-gray-200">
                Order #
              </th>
              <th className="py-3 px-4 font-semibold text-left uppercase text-gray-200">
                Product
              </th>
              <th className="py-3 px-4 font-semibold text-left uppercase text-gray-200">
                Status
              </th>
              <th className="py-3 px-4 hidden md:table-cell font-semibold text-left uppercase text-gray-200">
                Date
              </th>
              <th className="py-3 px-4 font-semibold text-left uppercase text-gray-200">
                Total
              </th>
              <th className="py-3 px-4 font-semibold text-left uppercase text-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    ),
    [ordersData]
  );

  return (
    <main className="flex-1 p-4 sm:p-8 overflow-y-auto text-white">
      <div className="max-w-7xl mx-auto">
        <BlurBox
          className="rounded-md shadow-md"
          style={{
            background: "hsla(220, 35%, 3%, 0.4)",
            borderColor: "rgb(71, 71, 71)",
          }}
        >
          <CardHeader className="px-6 pt-6">
            <CardTitle className="text-2xl font-bold">My Orders</CardTitle>
            <CardDescription className="text-gray-300">
              Review your order history
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-6">
            {renderFilterOptions()}

            {ordersData.length === 0 ? (
              // If no orders exist
              <div className="p-6 text-center">
                <p className="text-gray-200 text-sm sm:text-base">
                  Looks like you haven&apos;t placed an order.
                </p>
              </div>
            ) : (
              // If orders exist, show the mobile layout and table layout
              <>
                {mobileLayout}
                {tableLayout}

                {/* Pagination */}
                <div className="flex flex-wrap justify-end gap-2 mt-4">
                  <Button
                    variant="outline"
                    onClick={handlePreviousPage}
                    disabled={orderPage === 1}
                  >
                    Previous
                  </Button>
                  {renderPageButtons()}
                  <Button
                    variant="outline"
                    onClick={handleNextPage}
                    disabled={orderPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </BlurBox>
      </div>
    </main>
  );
}
