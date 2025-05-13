import type { ChartCardProps }  from "../utils/types";

export const ChartCard = ({ title, children, filters = true }: ChartCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium">{title}</h3>
        {filters && (
          <div className="flex items-center text-sm">
            <span className="mr-4 text-gray-500 cursor-pointer hover:text-[#0D21A1]">Daily</span>
            <span className="mr-4 text-gray-500 cursor-pointer hover:text-[#0D21A1]">Weekly</span>
            <span className="mr-4 text-[#0D21A1] font-medium cursor-pointer">Monthly</span>
            <span className="text-gray-500 cursor-pointer hover:text-[#0D21A1]">Yearly</span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};