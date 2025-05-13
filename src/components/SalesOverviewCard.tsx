import { BarChart3, ArrowUp, ArrowUpRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sales: 3800 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 4900 },
  { name: "Apr", sales: 2800 },
  { name: "May", sales: 1900 },
  { name: "Jun", sales: 2400 },
  { name: "Jul", sales: 3400 },
];

const SalesOverviewCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <BarChart3 size={20} className="text-[#0D21A1]" />
          <h2 className="text-lg font-semibold text-[#141414]">Sales Overview</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium px-3 py-1 rounded-full bg-green-50 text-green-600 flex items-center">
            <ArrowUp size={14} className="mr-1" />
            12.5%
          </div>
          <select className="text-sm border border-gray-200 rounded-lg p-2 text-gray-600">
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Daily</option>
          </select>
        </div>
      </div>

      {/* Sales Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
          <p className="text-xl font-bold text-[#141414]">$124,563.00</p>
          <div className="flex items-center mt-2 text-green-600 text-sm">
            <ArrowUpRight size={14} className="mr-1" />
            <span>12.5% vs last month</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">Average Order Value</p>
          <p className="text-xl font-bold text-[#141414]">$80.72</p>
          <div className="flex items-center mt-2 text-green-600 text-sm">
            <ArrowUpRight size={14} className="mr-1" />
            <span>3.2% vs last month</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
          <p className="text-xl font-bold text-[#141414]">3.6%</p>
          <div className="flex items-center mt-2 text-red-500 text-sm">
            <ArrowUpRight size={14} className="mr-1 transform rotate-90" />
            <span>0.8% vs last month</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#808080' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#808080' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #f0f0f0',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              itemStyle={{ color: '#141414' }}
              labelStyle={{ color: '#808080', fontWeight: 500 }}
            />
            <Bar dataKey="sales" fill="#0D21A1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesOverviewCard;