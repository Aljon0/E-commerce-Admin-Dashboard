import { useState } from "react";
import { LayoutDashboard, LogOut, ShoppingBag, ShoppingCart, Users, ChevronRight, ChevronLeft } from "lucide-react";
import { NavLink } from 'react-router-dom';
import { LogoutAlert } from "./LogOutAlert";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
  onClick?: () => void;
}

export const Sidebar = ({ collapsed, toggleSidebar }: SidebarProps) => {
  const [logoutAlertOpen, setLogoutAlertOpen] = useState(false);
  
  const handleLogout = () => {
    // Implement actual logout logic here
    console.log("User logged out");
    // Navigate to login page or perform other logout actions
  };

  return (
    <>
      <div className={`bg-[#011638] dark:bg-[#011638] text-white transition-all duration-300 ${collapsed ? "w-16" : "w-64"} min-h-screen fixed left-0 top-0`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {!collapsed && <span className="text-xl font-bold">ShopDash</span>}
          <button onClick={toggleSidebar} className="p-1 rounded hover:bg-gray-700">
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        
        <nav className="mt-6 px-2 flex flex-col h-[calc(100vh-80px)]">
          <div className="space-y-1">
            <SidebarLink to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" collapsed={collapsed} />
            <SidebarLink to="/products" icon={<ShoppingBag size={20} />} label="Products" collapsed={collapsed} />
            <SidebarLink to="/orders" icon={<ShoppingCart size={20} />} label="Orders" collapsed={collapsed} />
            <SidebarLink to="/customers" icon={<Users size={20} />} label="Customers" collapsed={collapsed} />
          </div>
          
          <div className="mt-auto space-y-3">
            {/* Theme Toggle */}
            {collapsed ? (
              <div className="flex justify-center my-2">
                <ThemeToggle compact />
              </div>
            ) : (
              <div className="px-2">
                <ThemeToggle />
              </div>
            )}
            
            {/* Logout Button */}
            <div 
              onClick={() => setLogoutAlertOpen(true)}
              className={`flex items-center py-3 px-2 rounded-lg cursor-pointer hover:bg-gray-700`}
            >
              <div className={`${!collapsed ? "mr-3" : ""} text-red-400`}>
                <LogOut size={20} />
              </div>
              {!collapsed && <span className="text-red-400">Logout</span>}
            </div>
          </div>
        </nav>
      </div>

      {/* Logout Alert Modal */}
      <LogoutAlert 
        isOpen={logoutAlertOpen}
        onClose={() => setLogoutAlertOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

const SidebarLink = ({ icon, label, to, collapsed }: SidebarLinkProps & { to: string }) => {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => 
        `flex items-center py-3 px-2 rounded-lg cursor-pointer ${
          isActive ? "bg-[#0D21A1]" : "hover:bg-gray-700"
        }`
      }
    >
      <div className={`${!collapsed ? "mr-3" : ""}`}>{icon}</div>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
};