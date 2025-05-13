import { useState } from "react";
import { Search, Filter, Clock, Package, CheckCircle, XCircle, Eye } from "lucide-react";

export default function Orders() {
  const [activeTab, setActiveTab] = useState("all");
  
  // Mock data
  const orders = [
    { id: "#ORD-5291", customer: "Emma Wilson", date: "May 12, 2025", total: 329.99, status: "Delivered", items: 3 },
    { id: "#ORD-5290", customer: "Michael Brown", date: "May 11, 2025", total: 124.50, status: "Processing", items: 2 },
    { id: "#ORD-5289", customer: "Sophia Garcia", date: "May 11, 2025", total: 259.97, status: "Shipped", items: 1 },
    { id: "#ORD-5288", customer: "James Miller", date: "May 10, 2025", total: 49.99, status: "Delivered", items: 1 },
    { id: "#ORD-5287", customer: "Olivia Johnson", date: "May 9, 2025", total: 187.45, status: "Cancelled", items: 4 },
    { id: "#ORD-5286", customer: "Noah Williams", date: "May 8, 2025", total: 299.99, status: "Delivered", items: 2 },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Delivered":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            <CheckCircle size={14} className="mr-1" /> {status}
          </span>
        );
      case "Processing":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            <Clock size={14} className="mr-1" /> {status}
          </span>
        );
      case "Shipped":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
            <Package size={14} className="mr-1" /> {status}
          </span>
        );
      case "Cancelled":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            <XCircle size={14} className="mr-1" /> {status}
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="py-6 px-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
        <div className="flex gap-4">
          <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md flex items-center">
            Export Orders
          </button>
          <button className="bg-[#0D21A1] hover:bg-[#0a1982] text-white px-4 py-2 rounded-md">
            Create Order
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
            />
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center bg-white hover:bg-gray-50">
                <Filter size={18} className="mr-2" />
                Filter
              </button>
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="total-high">Total: High to Low</option>
              <option value="total-low">Total: Low to High</option>
            </select>
          </div>
        </div>

        <div className="flex mb-6 border-b">
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "all" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("all")}
          >
            All Orders
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "processing" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("processing")}
          >
            Processing
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "shipped" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("shipped")}
          >
            Shipped
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "delivered" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("delivered")}
          >
            Delivered
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "cancelled" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("cancelled")}
          >
            Cancelled
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#0D21A1]">{order.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.items}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">${order.total.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">24</span> results
          </div>
          <div className="flex">
            <button className="px-3 py-1 border border-gray-300 rounded-l-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="px-3 py-1 border-t border-b border-gray-300 bg-[#0D21A1] text-white">
              1
            </button>
            <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              4
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-r-md bg-white text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}