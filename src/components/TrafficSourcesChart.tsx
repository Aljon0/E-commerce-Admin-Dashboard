import { PieChart } from 'lucide-react';
import { PieChart as RechartsChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Direct', value: 35 },
  { name: 'Organic Search', value: 25 },
  { name: 'Social Media', value: 20 },
  { name: 'Referral', value: 15 },
  { name: 'Email', value: 5 },
];

const COLORS = ['#0D21A1', '#3246D3', '#5D6EE8', '#8A97F8', '#B7C0FF'];

const TrafficSourcesChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-full">
      <div className="flex items-center gap-3 mb-6">
        <PieChart size={20} className="text-[#0D21A1]" />
        <h2 className="text-lg font-semibold text-[#141414]">Traffic Sources</h2>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              wrapperStyle={{
                fontSize: "12px",
                color: "#808080"
              }}
            />
          </RechartsChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span>Most active source:</span>
          <span className="font-medium text-[#141414]">Direct Traffic</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Growth rate:</span>
          <span className="font-medium text-green-600">+15.3% vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default TrafficSourcesChart;