// src/components/login/LoginPage.tsx
import { useState } from "react";
import {  ChevronDown, Eye, EyeOff, Lock, LogIn, 
  Shield, ShoppingBag, User, Users
} from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import type { AccountInfoProps, RoleOptionProps } from "../utils/types";

// Fixed account credentials
const accounts = {
  admin: { username: "admin", password: "admin123", role: "admin" },
  manager: { username: "manager", password: "manager123", role: "manager" },
  staff: { username: "staff", password: "staff123", role: "staff" }
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectRole = (role: string) => {
    setSelectedRole(role);
    setDropdownOpen(false);

    // Pre-fill username based on selected role
    setUsername(accounts[role.toLowerCase() as keyof typeof accounts]?.username || "");
  };

  const handleLogin = () => {
    setError("");
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const roleKey = selectedRole.toLowerCase() as keyof typeof accounts;
      const account = accounts[roleKey];
      
      if (!account) {
        setError("Please select a role");
        setIsLoading(false);
        return;
      }

      if (username === account.username && password === account.password) {
        // Successful login - in a real app, you would redirect to dashboard
        // and store authentication state
        alert(`Successfully logged in as ${selectedRole}`);
        // window.location.href = "/dashboard";
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
    <div className="min-h-screen bg-[#EEF0F2] dark:bg-gray-900 flex flex-col justify-center items-center p-4 transition-colors duration-200">
      <div className="max-w-md w-full">
        {/* Theme Toggle - Top Right */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        
        {/* Logo and Branding */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-[#0D21A1] p-3 rounded-lg">
              <ShoppingBag size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#141414] dark:text-white">ShopDash</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">E-Commerce Admin Platform</p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 transition-colors duration-200">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#141414] dark:text-white">Welcome Back</h2>
          
          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}
          
          <div>
            {/* Role Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Select Role
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full bg-[#EEF0F2] dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
                  onClick={toggleDropdown}
                >
                  {selectedRole ? (
                    <div className="flex items-center">
                      <span className="mr-2">{getRoleIcon(selectedRole)}</span>
                      <span className="dark:text-white">{selectedRole}</span>
                    </div>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">Choose your role</span>
                  )}
                  <ChevronDown size={20} className={`transition-transform dark:text-gray-400 ${dropdownOpen ? "transform rotate-180" : ""}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-[#EEF0F2] dark:bg-gray-700 text-[#141414] dark:text-white w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            
            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#EEF0F2] dark:bg-gray-700 text-[#141414] dark:text-white w-full pl-10 pr-10 py-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
                  placeholder="Enter your password"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleLogin();
                    }
                  }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-gray-400" />
                  ) : (
                    <Eye size={18} className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Login Button */}
            <button
              type="button"
              disabled={isLoading}
              onClick={handleLogin}
              className="w-full bg-[#0D21A1] hover:bg-[#0D21A1]/90 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
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
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Demo Accounts</h3>
            <div className="space-y-3">
              <AccountInfo role="Admin" username="admin" password="admin123" />
              <AccountInfo role="Manager" username="manager" password="manager123" />
              <AccountInfo role="Staff" username="staff" password="staff123" />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 ShopDash. All rights reserved.
        </div>
      </div>
    </div>
  );
};

const RoleOption = ({ role, description, icon, onClick }: RoleOptionProps) => {
  return (
    <div 
      className="px-4 py-3 hover:bg-[#EEF0F2] dark:hover:bg-gray-700 cursor-pointer flex items-start transition-colors"
      onClick={onClick}
    >
      <div className="mr-3 mt-1">{icon}</div>
      <div>
        <div className="font-medium dark:text-white">{role}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{description}</div>
      </div>
    </div>
  );
};

const AccountInfo = ({ role, username, password }: AccountInfoProps) => {
  const getRoleColor = () => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "manager":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "staff":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };
  
  return (
    <div className="bg-[#EEF0F2]/70 dark:bg-gray-700/50 rounded-lg p-3 flex items-center justify-between transition-colors">
      <div className="flex items-center">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getRoleColor()}`}>
          {role}
        </span>
        <span className="ml-3 text-sm dark:text-white">
          {username}
        </span>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {password}
      </div>
    </div>
  );
};

const Spinner = () => {
  return (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
};

export default LoginPage;