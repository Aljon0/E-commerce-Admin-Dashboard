import { Save, Upload } from "lucide-react";
import { useState } from "react";

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    position: "Store Owner",
    bio: "E-commerce entrepreneur with over 5 years of experience in online retail. Passionate about creating excellent customer experiences and growing businesses."
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#141414] mb-6">Profile Settings</h2>
      
      <div className="mb-8">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-[#0D21A1] flex items-center justify-center text-white text-2xl font-semibold">
              JD
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
              <div className="bg-[#0D21A1] text-white p-1 rounded-full cursor-pointer">
                <Upload size={16} />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#141414]">John Doe</h3>
            <p className="text-gray-500">Admin</p>
          </div>
        </div>
      </div>
      
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
          <input
            type="text"
            name="position"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
            placeholder="Store Owner"
            value={formData.position}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
          <textarea
            name="bio"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
            rows={4}
            placeholder="Tell us about yourself"
            value={formData.bio}
            onChange={handleChange}
          />
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
    </div>
  );
};

export default ProfileSettings;