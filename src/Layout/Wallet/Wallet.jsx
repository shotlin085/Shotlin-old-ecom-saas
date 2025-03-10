import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import BlurBox from "@/components/layout component/BlurBox.component"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js"

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend)

export default function Wallet() {
  // Hidden canvas used to generate gradient for the chart
  const hiddenCanvasRef = useRef(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    if (hiddenCanvasRef.current) {
      const ctx = hiddenCanvasRef.current.getContext("2d")
      // Create a vertical gradient for a futuristic look
      const gradient = ctx.createLinearGradient(0, 0, 0, 400)
      gradient.addColorStop(0, "rgba(75, 161, 245, 1)")
      gradient.addColorStop(1, "rgba(75, 161, 245, 0.2)")

      setChartData({
        labels: ["Apr 1", "Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6", "Apr 7"],
        datasets: [
          {
            label: "Wallet Balance",
            data: [500, 650, 600, 750, 800, 820, 1234.56],
            fill: true,
            backgroundColor: gradient,
            borderColor: gradient,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#4BA1F5",
            tension: 0.4,
            borderWidth: 3,
          },
        ],
      })
    }
  }, [])

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#0A1F44",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#4BA1F5",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: "#ffffff", font: { size: 12 } },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      y: {
        ticks: { color: "#ffffff", font: { size: 12 } },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  }

  return (
    <main className="flex-1 p-4 sm:p-8 overflow-y-auto  text-white">
      <div className="mx-auto max-w-7xl">
        <BlurBox
          className="rounded-md shadow-lg"
          style={{
            background:
              "linear-gradient(rgb(0 6 112 / 20%) 0%, rgb(0 8 169 / 22%) 130%)",
            borderColor: "rgb(71, 71, 71)",
          }}
        >
          {/* Header */}
          <CardHeader className="px-6 pt-6">
            <CardTitle className="text-2xl font-bold">My Wallet</CardTitle>
            <CardDescription className="text-gray-300">
              Manage your wallet balance, view transactions, and redeem gift
              cards.
            </CardDescription>
          </CardHeader>

          {/* Content */}
          <CardContent className="px-6 pb-6 space-y-6">
            {/* Top Summary Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Total Wallet Balance */}
              <BlurBox
                className="p-6 rounded-md shadow-md"
                style={{
                  background: "hsla(220, 35%, 3%, 0.4)",
                  borderColor: "rgb(71, 71, 71)",
                }}
              >
                <h3 className="text-lg font-semibold">Total Wallet Balance</h3>
                <p className="text-3xl font-bold mt-2">$1,234.56</p>
              </BlurBox>
              {/* Gift Card Redemption */}
              <BlurBox
                className=" p-6 rounded-md shadow-md"
                style={{
                  background: "hsla(220, 35%, 3%, 0.4)",
                  borderColor: "rgb(71, 71, 71)",
                }}
              >
                <h3 className="text-lg font-semibold">Redeem Gift Card</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 gap-4">
                  <Input
                    placeholder="Enter gift card code"
                    className="bg-black bg-opacity-50 text-white"
                  />
                  <Button
                    variant="default"
                    className="bg-[#4BA1F5] hover:bg-[#3893e5]"
                  >
                    Redeem
                  </Button>
                </div>
              </BlurBox>
            </div>

            {/* Wallet Activity Graph */}
            <BlurBox
              className=" p-6 rounded-md shadow-md h-80 hidden md:block"
              style={{
                background: "hsla(220, 35%, 3%, 0.4)",
                borderColor: "rgb(71, 71, 71)",
              }}
            >
              <h3 className="text-lg font-semibold mb-4">Wallet Activity</h3>
              {chartData ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full"
                >
                  <Line data={chartData} options={chartOptions} />
                </motion.div>
              ) : (
                <p>Loading chart...</p>
              )}
            </BlurBox>

            {/* Transaction History */}
            <BlurBox
              className="p-6 rounded-md shadow-md"
              style={{
                background: "hsla(220, 35%, 3%, 0.4)",
                borderColor: "rgb(71, 71, 71)",
              }}
            >
              <h3 className="text-lg font-semibold mb-4">
                Transaction History
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0b051b]">
                      <th className="py-3 px-4 text-left uppercase text-gray-200">
                        Date
                      </th>
                      <th className="py-3 px-4 text-left uppercase text-gray-200">
                        Description
                      </th>
                      <th className="py-3 px-4 text-left uppercase text-gray-200">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#1F3A66] hover:bg-[#0a0722] transition-colors">
                      <td className="py-3 px-4 whitespace-nowrap">
                        04/05/2023
                      </td>
                      <td className="py-3 px-4">Deposit</td>
                      <td className="py-3 px-4 text-green-500">$500.00</td>
                    </tr>
                    <tr className="border-b border-[#1F3A66] hover:bg-[#0a0722] transition-colors">
                      <td className="py-3 px-4 whitespace-nowrap">
                        04/03/2023
                      </td>
                      <td className="py-3 px-4">Purchase at Shop</td>
                      <td className="py-3 px-4 text-red-500">-$150.00</td>
                    </tr>
                    <tr className="border-b border-[#1F3A66] hover:bg-[#0a0722] transition-colors">
                      <td className="py-3 px-4 whitespace-nowrap">
                        04/01/2023
                      </td>
                      <td className="py-3 px-4">Gift Card Redeemed</td>
                      <td className="py-3 px-4 text-green-500">$50.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </BlurBox>
          </CardContent>
        </BlurBox>
      </div>
      {/* Hidden canvas used for gradient calculation */}
      <canvas ref={hiddenCanvasRef} className="hidden" />
    </main>
  );
}

