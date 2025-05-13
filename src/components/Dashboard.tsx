import { lazy, Suspense } from 'react';
import { ChevronDown, DollarSign, Percent, ShoppingCart, Users } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie } from "recharts";
import { StatCard } from "./StatCard";
import { ChartCard } from "./ChartCard";
import { Calendar, FileDown } from "./Icons";
import { salesData, revenueData, categoryData, COLORS, latestOrders, topProducts } from "../data/sampleData";

// Lazy load heavier components
const OrdersTable = lazy(() => import('../components/OrdersTable'));
const TopProducts = lazy(() => import('../components/TopProducts'));
const CustomerDemographics = lazy(() => import('../components/CustomerDemographics'));

export const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="flex items-center">
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm mr-2">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">May 1 - May 13, 2025</span>
            <ChevronDown size={16} className="ml-2" />
          </button>
          <button className="px-4 py-2 bg-[#0D21A1] text-white rounded-lg shadow-sm flex items-center">
            <FileDown size={16} className="mr-2" />
            <span className="text-sm">Export</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Total Revenue" 
          value="$124,563.00" 
          icon={<DollarSign size={20} className="text-[#0D21A1]" />}
          trend="up"
          trendValue="12.5%"
        />
        <StatCard 
          title="Total Orders" 
          value="1,543" 
          icon={<ShoppingCart size={20} className="text-[#011638]" />}
          trend="up"
          trendValue="8.2%"
        />
        <StatCard 
          title="Total Customers" 
          value="45,254" 
          icon={<Users size={20} className="text-purple-600" />}
          trend="up"
          trendValue="3.1%"
        />
        <StatCard 
          title="Conversion Rate" 
          value="3.6%" 
          icon={<Percent size={20} className="text-green-600" />}
          trend="down"
          trendValue="0.8%"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <ChartCard title="Sales Analytics">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#808080" />
                <YAxis stroke="#808080" />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#0D21A1" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
        <div>
          <ChartCard title="Sales by Category" filters={false}>
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span className="text-xs">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Latest Orders</h3>
              <button className="text-sm text-[#0D21A1]">View All</button>
            </div>
            <Suspense fallback={<div>Loading orders...</div>}>
              <OrdersTable orders={latestOrders} />
            </Suspense>
          </div>
        </div>
        <div>
          <div className="bg-white p-6 rounded-xl shadow-sm h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Top Products</h3>
              <button className="text-sm text-[#0D21A1]">View All</button>
            </div>
            <Suspense fallback={<div>Loading products...</div>}>
              <TopProducts products={topProducts} />
            </Suspense>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Revenue Trend">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#808080" />
              <YAxis stroke="#808080" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#011638" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium">Customer Demographics</h3>
            <button className="text-sm text-[#0D21A1]">View Report</button>
          </div>
          <Suspense fallback={<div>Loading demographics...</div>}>
            <CustomerDemographics />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Dashboard