import { Activity } from "lucide-react";
import { FunnelChart, Funnel, LabelList, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Visits", value: 12000, fill: "#0D21A1" },
  { name: "Product Views", value: 8400, fill: "#3246D3" },
  { name: "Add to Cart", value: 4200, fill: "#5D6EE8" },
  { name: "Checkout", value: 2100, fill: "#8A97F8" },
  { name: "Purchase", value: 1543, fill: "#B7C0FF" },
];

const ConversionFunnelChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <Activity size={20} className="text-[#0D21A1]" />
        <h2 className="text-lg font-semibold text-[#141414]">Conversion Funnel</h2>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Funnel
              data={data}
              dataKey="value"
              isAnimationActive
            >
              <LabelList
                position="right"
                fill="#141414"
                stroke="none"
                dataKey="name"
                formatter={(name: string) => `${name}`}
              />
              <LabelList
                position="right"
                fill="#808080"
                stroke="none"
                dataKey="value"
                formatter={(value: string) => `${value.toLocaleString()}`}
                offset={60}
              />
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
          <p className="text-xl font-bold text-[#141414]">12.9%</p>
          <p className="text-xs text-gray-500 mt-1">Visits to Purchase</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1">Cart Abandonment</p>
          <p className="text-xl font-bold text-[#141414]">63.2%</p>
          <p className="text-xs text-gray-500 mt-1">Cart to Purchase</p>
        </div>
      </div>
    </div>
  );
};

export default ConversionFunnelChart;