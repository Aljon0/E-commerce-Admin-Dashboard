import { useState } from "react";
import { Search, Filter, Plus, Edit, Trash2 } from "lucide-react";

export default function Products() {
  const [activeTab, setActiveTab] = useState("all");
  
  // Mock data
  const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 129.99, stock: 45, status: "Active" },
    { id: 2, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 28, status: "Active" },
    { id: 3, name: "Cotton T-shirt", category: "Clothing", price: 24.99, stock: 120, status: "Active" },
    { id: 4, name: "Bluetooth Speaker", category: "Electronics", price: 79.99, stock: 18, status: "Low Stock" },
    { id: 5, name: "Desk Lamp", category: "Home", price: 39.99, stock: 0, status: "Out of Stock" },
    { id: 6, name: "Face Moisturizer", category: "Beauty", price: 18.99, stock: 67, status: "Active" },
  ];

  return (
    <div className="py-6 px-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <button className="bg-[#0D21A1] hover:bg-[#0a1982] text-white px-4 py-2 rounded-md flex items-center">
          <Plus size={18} className="mr-2" />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
            />
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center bg-white hover:bg-gray-50">
                <Filter size={18} className="mr-2" />
                Filter
              </button>
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent">
              <option value="newest">Newest</option>
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="flex mb-6 border-b">
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "all" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("all")}
          >
            All Products
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "active" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("active")}
          >
            Active
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "draft" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("draft")}
          >
            Draft
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === "archived" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab("archived")}
          >
            Archived
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
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
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${product.status === "Active" ? "bg-green-100 text-green-800" : 
                      product.status === "Low Stock" ? "bg-yellow-100 text-yellow-800" : 
                      "bg-red-100 text-red-800"}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-[#0D21A1] hover:text-[#0a1982] mr-3">
                      <Edit size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">6</span> results
          </div>
          <div className="flex">
            <button className="px-3 py-1 border border-gray-300 rounded-l-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="px-3 py-1 border-t border-b border-gray-300 bg-[#0D21A1] text-white">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-r-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}