import { useState } from "react";
import { User, Store, CreditCard, ShieldCheck, Bell, Mail, Languages, HelpCircle } from "lucide-react";
import ProfileSettings from "../components/ProfileSettings";
import StoreSettings from "../components/StoreSettings";
import PaymentSettings from "../components/PaymentSettings";
import SecuritySettings from "../components/SecuritySettings";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      case "store":
        return <StoreSettings />;
      case "payment":
        return <PaymentSettings />;
      case "security":
        return <SecuritySettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#141414] mb-6">Settings</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Settings Navigation Sidebar */}
        <div className="w-full lg:w-64 bg-white rounded-xl shadow-sm p-4">
          <nav>
            <ul>
              <li>
                <button 
                  className={`flex items-center gap-3 w-full p-3 rounded-lg mb-1 ${
                    activeTab === "profile" ? "bg-[#0D21A1] text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  <User size={18} />
                  <span>Profile</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center gap-3 w-full p-3 rounded-lg mb-1 ${
                    activeTab === "store" ? "bg-[#0D21A1] text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("store")}
                >
                  <Store size={18} />
                  <span>Store</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center gap-3 w-full p-3 rounded-lg mb-1 ${
                    activeTab === "payment" ? "bg-[#0D21A1] text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("payment")}
                >
                  <CreditCard size={18} />
                  <span>Payment</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center gap-3 w-full p-3 rounded-lg mb-1 ${
                    activeTab === "security" ? "bg-[#0D21A1] text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("security")}
                >
                  <ShieldCheck size={18} />
                  <span>Security</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center gap-3 w-full p-3 rounded-lg mb-1 ${
                    activeTab === "notifications" ? "bg-[#0D21A1] text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("notifications")}
                >
                  <Bell size={18} />
                  <span>Notifications</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center gap-3 w-full p-3 rounded-lg mb-1 ${
                    activeTab === "email" ? "bg-[#0D21A1] text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("email")}
                >
                  <Mail size={18} />
                  <span>Email</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center gap-3 w-full p-3 rounded-lg mb-1 ${
                    activeTab === "language" ? "bg-[#0D21A1] text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("language")}
                >
                  <Languages size={18} />
                  <span>Language</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center gap-3 w-full p-3 rounded-lg mb-1 ${
                    activeTab === "help" ? "bg-[#0D21A1] text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("help")}
                >
                  <HelpCircle size={18} />
                  <span>Help & Support</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;