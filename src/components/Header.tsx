import { MessageSquare, Search } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Bell } from "./Icons";

export const Header = () => {
  const { logout, userRole } = useAuth();

  // Get user initials from username (or you can modify this to use actual user data)
  const getUserInitials = () => {
    if (!userRole) return "US";
    return userRole.substring(0, 2).toUpperCase();
  };

  return (
    <div className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
      <div className="flex items-center rounded-lg bg-[#EEF0F2] p-2">
        <Search size={20} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none outline-none text-sm w-64"
        />
      </div>
      <div className="flex items-center">
        <button className="p-2 rounded-full bg-[#EEF0F2] mr-4">
          <MessageSquare size={20} className="text-gray-700" />
        </button>
        <button className="p-2 rounded-full bg-[#EEF0F2] mr-4">
          <Bell size={20} className="text-gray-700" />
        </button>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-[#0D21A1] flex items-center justify-center text-white font-medium">
            {getUserInitials()}
          </div>
          <div className="ml-3 hidden md:block">
            <p className="text-sm font-medium">
              {userRole
                ? userRole.charAt(0).toUpperCase() + userRole.slice(1)
                : "User"}
            </p>
            <p className="text-xs text-gray-500">
              {userRole === "admin"
                ? "Administrator"
                : userRole === "manager"
                ? "Manager"
                : userRole === "staff"
                ? "Staff Member"
                : "Role"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
