import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Settings,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogoutAlert } from "./LogOutAlert";

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
  to: string;
  roles?: string[];
}

export const Sidebar = ({ collapsed, toggleSidebar }: SidebarProps) => {
  const [logoutAlertOpen, setLogoutAlertOpen] = useState(false);
  const { logout, userRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    setLogoutAlertOpen(false);
  };

  // Menu items with role restrictions
  const menuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      to: "/dashboard",
      roles: ["admin", "manager", "staff"],
    },
    {
      icon: <ShoppingBag size={20} />,
      label: "Products",
      to: "/products",
      roles: ["admin", "manager"],
    },
    {
      icon: <ShoppingCart size={20} />,
      label: "Orders",
      to: "/orders",
      roles: ["admin", "manager", "staff"],
    },
    {
      icon: <Users size={20} />,
      label: "Customers",
      to: "/customers",
      roles: ["admin", "manager"],
    },
    {
      icon: <Shield size={20} />,
      label: "Admin",
      to: "/admin",
      roles: ["admin"],
    },
    {
      icon: <Settings size={20} />,
      label: "Settings",
      to: "/settings",
      roles: ["admin"],
    },
  ];

  // Filter menu items based on user role
  const filteredMenuItems = menuItems.filter(
    (item) => !item.roles || (userRole && item.roles.includes(userRole))
  );

  return (
    <>
      <div
        className={`bg-[#808080] dark:bg-[#808080] text-white transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        } min-h-screen fixed left-0 top-0 shadow-xl`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          {!collapsed && (
            <span className="text-xl font-bold text-white">ShopDash</span>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-lg hover:bg-gray-600 transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <nav className="mt-6 px-2 flex flex-col h-[calc(100vh-80px)]">
          <div className="space-y-1">
            {filteredMenuItems.map((item) => (
              <SidebarLink
                key={item.to}
                icon={item.icon}
                label={item.label}
                to={item.to}
                collapsed={collapsed}
              />
            ))}
          </div>

          <div className="mt-auto space-y-3">
            {/* Logout Button */}
            <div
              onClick={() => setLogoutAlertOpen(true)}
              className={`flex items-center py-3 px-2 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors`}
              aria-label="Logout"
            >
              <div className={`${!collapsed ? "mr-3" : ""} text-red-300`}>
                <LogOut size={20} />
              </div>
              {!collapsed && <span className="text-red-300">Logout</span>}
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

const SidebarLink = ({ icon, label, to, collapsed }: SidebarLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center py-3 px-2 rounded-lg cursor-pointer transition-colors ${
          isActive ? "bg-[#0D21A1] shadow-md" : "hover:bg-gray-600"
        }`
      }
      aria-label={label}
    >
      <div className={`${!collapsed ? "mr-3" : ""} text-white`}>{icon}</div>
      {!collapsed && <span className="text-white font-medium">{label}</span>}
    </NavLink>
  );
};
