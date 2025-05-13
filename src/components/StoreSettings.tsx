import { useState } from "react";
import { Save, Upload, Globe, MapPin } from "lucide-react";

const StoreSettings = () => {
  const [storeData, setStoreData] = useState({
    name: "ShopDash Store",
    website: "www.shopdash-store.com",
    email: "contact@shopdash-store.com",
    phone: "+1 (555) 987-6543",
    address: "123 Commerce St",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    country: "United States",
    currency: "USD",
    timezone: "America/Los_Angeles"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStoreData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Store settings saved:", storeData);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#141414] mb-6">Store Settings</h2>
      
      <div className="mb-8">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
              <img src="/api/placeholder/100/100" alt="Store logo" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
              <div className="bg-[#0D21A1] text-white p-1 rounded-full cursor-pointer">
                <Upload size={16} />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#141414]">Store Logo</h3>
            <p className="text-gray-500 text-sm">Recommended size: 512x512px</p>
          </div>
        </div>
      </div>
      
      <div className="border-b border-gray-200 mb-6 pb-6">
        <h3 className="text-lg font-medium text-[#141414] mb-4">General Information</h3>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
            value={storeData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Globe size={16} />
                Website
              </div>
            </label>
            <input
              type="text"
              name="website"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={storeData.website}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={storeData.email}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      
      <div className="border-b border-gray-200 mb-6 pb-6">
        <h3 className="text-lg font-medium text-[#141414] mb-4">
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            Address
          </div>
        </h3>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
          <input
            type="text"
            name="address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
            value={storeData.address}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <input
              type="text"
              name="city"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={storeData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
            <input
              type="text"
              name="state"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={storeData.state}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ZIP/Postal Code</label>
            <input
              type="text"
              name="zipCode"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={storeData.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <select
            name="country"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
            value={storeData.country}
            onChange={handleChange}
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium text-[#141414] mb-4">Regional Settings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
            <select
              name="currency"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={storeData.currency}
              onChange={handleChange}
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="AUD">AUD - Australian Dollar</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select
              name="timezone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={storeData.timezone}
              onChange={handleChange}
            >
              <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
              <option value="America/Denver">Mountain Time (US & Canada)</option>
              <option value="America/Chicago">Central Time (US & Canada)</option>
              <option value="America/New_York">Eastern Time (US & Canada)</option>
              <option value="Europe/London">London</option>
              <option value="Europe/Paris">Paris</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-[#0D21A1] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#0A1A80] transition-colors"
        >
          <Save size={18} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default StoreSettings;