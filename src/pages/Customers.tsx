import { useState } from "react";
import { Search, Filter, Phone, Mail, UserPlus, Star, Tag, ChevronRight, Users, UserCheck } from "lucide-react";

export default function CustomersPage() {
  const [activeTab, setActiveTab] = useState("all");
  
  // Mock data
  const customers = [
    { 
      id: 1, 
      name: "Emma Wilson", 
      email: "emma.wilson@example.com", 
      phone: "+1 (555) 123-4567", 
      joinDate: "Jan 15, 2025", 
      orders: 8, 
      spent: 1245.95,
      status: "Active",
      tags: ["VIP", "Repeat Customer"]
    },
    { 
      id: 2, 
      name: "Michael Brown", 
      email: "michael.brown@example.com", 
      phone: "+1 (555) 234-5678", 
      joinDate: "Feb 3, 2025", 
      orders: 3, 
      spent: 489.50,
      status: "Active",
      tags: ["New Customer"]
    },
    { 
      id: 3, 
      name: "Sophia Garcia", 
      email: "sophia.garcia@example.com", 
      phone: "+1 (555) 345-6789", 
      joinDate: "Nov 22, 2024", 
      orders: 12, 
      spent: 2367.25,
      status: "Active",
      tags: ["VIP", "Wholesale"]
    },
    { 
      id: 4, 
      name: "James Miller", 
      email: "james.miller@example.com", 
      phone: "+1 (555) 456-7890", 
      joinDate: "Mar 7, 2025", 
      orders: 1, 
      spent: 49.99,
      status: "Active",
      tags: ["New Customer"]
    },
    { 
      id: 5, 
      name: "Olivia Johnson", 
      email: "olivia.johnson@example.com", 
      phone: "+1 (555) 567-8901", 
      joinDate: "Dec 14, 2024", 
      orders: 6, 
      spent: 834.75,
      status: "Inactive",
      tags: ["Retail"]
    },
    { 
      id: 6, 
      name: "Noah Williams", 
      email: "noah.williams@example.com", 
      phone: "+1 (555) 678-9012", 
      joinDate: "Jan 29, 2025", 
      orders: 4, 
      spent: 638.97,
      status: "Active",
      tags: ["Repeat Customer"]
    },
  ];

  return (
    <div className="py-6 px-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
        <button className="bg-[#0D21A1] hover:bg-[#0a1982] text-white px-4 py-2 rounded-md flex items-center">
          <UserPlus size={18} className="mr-2" />
          Add Customer
        </button>
      </div>

      <div className="flex mb-6 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-5 flex-1">
          <div className="flex items-center">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
              <Users size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Customers</p>
              <p className="text-2xl font-bold">45,254</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5 flex-1">
          <div className="flex items-center">
            <div className="bg-green-100 rounded-full p-3 mr-4">
              <UserCheck size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Customers</p>
              <p className="text-2xl font-bold">39,471</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5 flex-1">
          <div className="flex items-center">
            <div className="bg-purple-100 rounded-full p-3 mr-4">
              <Star size={24} className="text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">VIP Customers</p>
              <p className="text-2xl font-bold">1,254</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5 flex-1">
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <UserPlus size={24} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">New This Month</p>
              <p className="text-2xl font-bold">872</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search customers..."
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
              <option value="name">Sort by Name</option>
              <option value="newest">Newest Customers</option>
              <option value="orders">Most Orders</option>
              <option value="spent">Most Spent</option>
            </select>
          </div>
        </div>

        <div className="flex mb-6 border-b">
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "all" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("all")}
          >
            All Customers
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "active" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("active")}
          >
            Active
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "inactive" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("inactive")}
          >
            Inactive
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "vip" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("vip")}
          >
            VIP
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "new" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("new")}
          >
            New
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
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
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 mr-3">
                        <div className="h-10 w-10 rounded-full bg-[#0D21A1] flex items-center justify-center text-white font-medium">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="text-sm text-gray-900 flex items-center">
                        <Mail size={14} className="mr-1 text-gray-400" />
                        {customer.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Phone size={14} className="mr-1 text-gray-400" />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{customer.joinDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.orders}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">${customer.spent.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {customer.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      customer.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-[#0D21A1] hover:text-[#0a1982]">
                      <ChevronRight size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">45,254</span> results
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
              ...
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