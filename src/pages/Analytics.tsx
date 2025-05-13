import { useState } from "react";
import { BarChart3, LineChart, PieChart, Filter, ChevronDown, Download, Calendar } from "lucide-react";
import SalesOverviewCard from "../components/SalesOverviewCard";
import TrafficSourcesChart from "../components/TRafficSourcesChart";
import TopSellingProducts from "../components/TopSellingProducts";
import ConversionFunnelChart from "../components/ConversionFunnelChart";

const Analytics = () => {
  const [dateRange] = useState("Last 30 days");
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#141414]">Analytics</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white rounded-lg border border-gray-200 px-4 py-2 cursor-pointer">
            <Calendar size={18} className="text-gray-500 mr-2" />
            <span className="text-sm text-gray-700">{dateRange}</span>
            <ChevronDown size={16} className="text-gray-500 ml-2" />
          </div>
          <button className="flex items-center bg-[#0D21A1] text-white rounded-lg px-4 py-2">
            <Download size={18} className="mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Analytics Navigation Tabs */}
      <div className="flex gap-6 border-b border-gray-200 mb-6">
        <button 
          className={`pb-3 px-1 font-medium ${activeTab === "overview" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500"}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button 
          className={`pb-3 px-1 font-medium flex items-center gap-2 ${activeTab === "sales" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500"}`}
          onClick={() => setActiveTab("sales")}
        >
          <BarChart3 size={18} />
          Sales
        </button>
        <button 
          className={`pb-3 px-1 font-medium flex items-center gap-2 ${activeTab === "traffic" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500"}`}
          onClick={() => setActiveTab("traffic")}
        >
          <LineChart size={18} />
          Traffic
        </button>
        <button 
          className={`pb-3 px-1 font-medium flex items-center gap-2 ${activeTab === "products" ? "text-[#0D21A1] border-b-2 border-[#0D21A1]" : "text-gray-500"}`}
          onClick={() => setActiveTab("products")}
        >
          <PieChart size={18} />
          Products
        </button>
      </div>

      {/* Filters Row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-gray-700">Filter by:</div>
          <div className="flex items-center bg-white rounded-lg border border-gray-200 px-3 py-2 cursor-pointer">
            <span className="text-sm text-gray-700">Category</span>
            <ChevronDown size={16} className="text-gray-500 ml-2" />
          </div>
          <div className="flex items-center bg-white rounded-lg border border-gray-200 px-3 py-2 cursor-pointer">
            <span className="text-sm text-gray-700">Channel</span>
            <ChevronDown size={16} className="text-gray-500 ml-2" />
          </div>
        </div>
        <button className="flex items-center bg-white rounded-lg border border-gray-200 px-3 py-2">
          <Filter size={16} className="text-gray-500 mr-2" />
          <span className="text-sm text-gray-700">More Filters</span>
        </button>
      </div>

      {/* Main Analytics Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <SalesOverviewCard />
        </div>
        <div>
          <TrafficSourcesChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopSellingProducts />
        <ConversionFunnelChart />
      </div>
    </div>
  );
};

export default Analytics;