import {
  ChevronDown,
  Eye,
  EyeOff,
  Lock,
  LogIn,
  Shield,
  ShoppingBag,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { AccountInfoProps, RoleOptionProps } from "../utils/types";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectRole = (role: string) => {
    setSelectedRole(role);
    setDropdownOpen(false);
    setUsername(role.toLowerCase());
  };

  const handleLogin = () => {
    setError("");
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (!selectedRole) {
        setError("Please select a role");
        setIsLoading(false);
        return;
      }

      const success = login(username, password, selectedRole);

      if (success) {
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  const getRoleIcon = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin":
        return <Shield size={18} />;
      case "manager":
        return <Users size={18} />;
      case "staff":
        return <User size={18} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 transition-colors duration-200">
      <div className="max-w-md w-full">
        {/* Logo and Branding */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-[#0D21A1] p-3 rounded-xl shadow-lg">
              <ShoppingBag size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#141414]">ShopDash</h1>
          <p className="text-[#808080] mt-2">E-Commerce Admin Platform</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#EEF0F2] rounded-2xl shadow-xl border border-gray-100 p-8 transition-colors duration-200">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#141414]">
            Welcome Back
          </h2>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-4 text-sm border border-red-200">
              {error}
            </div>
          )}

          <div>
            {/* Role Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#141414] mb-2">
                Select Role
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent shadow-sm hover:shadow-md transition-shadow"
                  onClick={toggleDropdown}
                >
                  {selectedRole ? (
                    <div className="flex items-center">
                      <span className="mr-2 text-[#0D21A1]">
                        {getRoleIcon(selectedRole)}
                      </span>
                      <span className="text-[#141414] font-medium">
                        {selectedRole}
                      </span>
                    </div>
                  ) : (
                    <span className="text-[#808080]">Choose your role</span>
                  )}
                  <ChevronDown
                    size={20}
                    className={`transition-transform text-[#808080] ${
                      dropdownOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                    <RoleOption
                      role="Admin"
                      description="Full access to all features"
                      icon={<Shield size={18} className="text-[#0D21A1]" />}
                      onClick={() => selectRole("Admin")}
                    />
                    <RoleOption
                      role="Manager"
                      description="Manage orders and products"
                      icon={<Users size={18} className="text-[#0D21A1]" />}
                      onClick={() => selectRole("Manager")}
                    />
                    <RoleOption
                      role="Staff"
                      description="View and update orders"
                      icon={<User size={18} className="text-[#0D21A1]" />}
                      onClick={() => selectRole("Staff")}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Username Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#141414] mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-[#808080]" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white text-[#141414] w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent shadow-sm hover:shadow-md transition-shadow"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#141414] mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-[#808080]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white text-[#141414] w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent shadow-sm hover:shadow-md transition-shadow"
                  placeholder="Enter your password"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleLogin();
                    }
                  }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-50 rounded-r-xl transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-[#808080]" />
                  ) : (
                    <Eye size={18} className="text-[#808080]" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="button"
              disabled={isLoading}
              onClick={handleLogin}
              className="w-full bg-[#0D21A1] hover:bg-[#0D21A1]/90 disabled:bg-[#808080] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  <span>Login</span>
                  <LogIn size={18} className="ml-2" />
                </>
              )}
            </button>
          </div>

          {/* Demo Account Info */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-[#141414] mb-3">
              Demo Accounts
            </h3>
            <div className="space-y-3">
              <AccountInfo role="Admin" username="admin" password="admin123" />
              <AccountInfo
                role="Manager"
                username="manager"
                password="manager123"
              />
              <AccountInfo role="Staff" username="staff" password="staff123" />
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-[#808080]">
          &copy; 2025 ShopDash. All rights reserved.
        </div>
      </div>
    </div>
  );
};

const RoleOption = ({ role, description, icon, onClick }: RoleOptionProps) => {
  return (
    <div
      className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-start transition-colors border-b border-gray-100 last:border-b-0"
      onClick={onClick}
    >
      <div className="mr-3 mt-1">{icon}</div>
      <div>
        <div className="font-medium text-[#141414]">{role}</div>
        <div className="text-xs text-[#808080]">{description}</div>
      </div>
    </div>
  );
};

const AccountInfo = ({ role, username, password }: AccountInfoProps) => {
  const getRoleColor = () => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-blue-50 text-[#0D21A1] border border-blue-200";
      case "manager":
        return "bg-purple-50 text-purple-700 border border-purple-200";
      case "staff":
        return "bg-green-50 text-green-700 border border-green-200";
      default:
        return "bg-gray-50 text-[#808080] border border-gray-200";
    }
  };

  return (
    <div className="bg-white/70 rounded-xl p-3 flex items-center justify-between transition-colors border border-gray-100 hover:shadow-sm">
      <div className="flex items-center">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${getRoleColor()}`}
        >
          {role}
        </span>
        <span className="ml-3 text-sm font-medium text-[#141414]">
          {username}
        </span>
      </div>
      <div className="text-sm text-[#808080] font-mono bg-gray-50 px-2 py-1 rounded">
        {password}
      </div>
    </div>
  );
};

const Spinner = () => {
  return (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default LoginPage;
