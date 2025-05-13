import { ArrowDown, ArrowUp } from "lucide-react";
import type { StatCardProps } from "../utils/types";
export const StatCard = ({ title, value, icon, trend, trendValue }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${title === 'Total Revenue' ? 'bg-[#0D21A1]/10' : title === 'Total Orders' ? 'bg-[#011638]/10' : title === 'Total Customers' ? 'bg-purple-100' : 'bg-green-100'}`}>
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`flex items-center text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          {trendValue}
        </span>
        <span className="text-xs text-gray-500 ml-2">vs last month</span>
      </div>
    </div>
  );
};