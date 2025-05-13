import { LayoutDashboard, ShoppingBag, ShoppingCart, Users, BarChart3, Settings, LogOut, ChevronRight, ChevronLeft } from "lucide-react";
import { NavLink } from 'react-router-dom';
import type { SidebarProps } from "../utils/types";
import type { SidebarLinkProps } from "../utils/types";

export const Sidebar = ({ collapsed, toggleSidebar }: SidebarProps) => {
  return (
    <div className={`bg-[#011638] text-white transition-all duration-300 ${collapsed ? "w-16" : "w-64"} min-h-screen fixed left-0 top-0`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <span className="text-xl font-bold">ShopDash</span>}
        <button onClick={toggleSidebar} className="p-1 rounded hover:bg-gray-700">
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      <nav className="mt-6 px-2">
        <SidebarLink to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" collapsed={collapsed} />
        <SidebarLink to="/products" icon={<ShoppingBag size={20} />} label="Products" collapsed={collapsed} />
        <SidebarLink to="/orders" icon={<ShoppingCart size={20} />} label="Orders" collapsed={collapsed} />
        <SidebarLink to="/customers" icon={<Users size={20} />} label="Customers" collapsed={collapsed} />
        <SidebarLink to="/analytics" icon={<BarChart3 size={20} />} label="Analytics" collapsed={collapsed} />
        <SidebarLink to="/settings" icon={<Settings size={20} />} label="Settings" collapsed={collapsed} />
        <div className="mt-auto pt-20">
          <SidebarLink to="/logout" icon={<LogOut size={20} />} label="Logout" collapsed={collapsed} />
        </div>
      </nav>
    </div>
  );
};

const SidebarLink = ({ icon, label, to, collapsed }: SidebarLinkProps & { to: string }) => {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => 
        `flex items-center py-3 px-2 mb-2 rounded-lg cursor-pointer ${
          isActive ? "bg-[#0D21A1]" : "hover:bg-gray-700"
        }`
      }
    >
      <div className="mr-3">{icon}</div>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
};