import { TrendingUp, ArrowRight } from "lucide-react";

const TopSellingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      category: "Electronics",
      price: 129.99,
      sold: 254,
      revenue: 33019.46,
      growth: 18.5,
    },
    {
      id: 2,
      name: "Smart Watch Ultra",
      category: "Electronics",
      price: 199.99,
      sold: 187,
      revenue: 37398.13,
      growth: 12.3,
    },
    {
      id: 3,
      name: "Premium Yoga Mat",
      category: "Fitness",
      price: 49.99,
      sold: 165,
      revenue: 8248.35,
      growth: 7.8,
    },
    {
      id: 4,
      name: "Organic Coffee Beans",
      category: "Food & Drinks",
      price: 19.99,
      sold: 142,
      revenue: 2838.58,
      growth: -2.4,
    },
    {
      id: 5,
      name: "Portable Power Bank",
      category: "Electronics",
      price: 39.99,
      sold: 134,
      revenue: 5358.66,
      growth: 9.1,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <TrendingUp size={20} className="text-[#0D21A1]" />
          <h2 className="text-lg font-semibold text-[#141414]">Top Selling Products</h2>
        </div>
        <select className="text-sm border border-gray-200 rounded-lg p-2 text-gray-600">
          <option>This Month</option>
          <option>Last Month</option>
          <option>Last 3 Months</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
              <th className="pb-3 font-medium">Product</th>
              <th className="pb-3 font-medium">Category</th>
              <th className="pb-3 font-medium text-right">Price</th>
              <th className="pb-3 font-medium text-right">Units Sold</th>
              <th className="pb-3 font-medium text-right">Revenue</th>
              <th className="pb-3 font-medium text-right">Growth</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 text-[#141414] font-medium">{product.name}</td>
                <td className="py-3 text-gray-600">{product.category}</td>
                <td className="py-3 text-gray-600 text-right">${product.price.toFixed(2)}</td>
                <td className="py-3 text-gray-600 text-right">{product.sold}</td>
                <td className="py-3 text-gray-600 text-right">${product.revenue.toLocaleString()}</td>
                <td className={`py-3 text-right ${product.growth >= 0 ? "text-green-600" : "text-red-500"}`}>
                  {product.growth >= 0 ? "+" : ""}{product.growth}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-right">
        <a href="#" className="text-[#0D21A1] text-sm font-medium flex items-center justify-end">
          View all products
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default TopSellingProducts;