import { useState } from "react";
import { Save, ShieldCheck, Lock, EyeOff } from "lucide-react";

const SecuritySettings = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState("30");
  const [loginNotifications, setLoginNotifications] = useState(true);
  const [securityQuestions] = useState([
    {
      id: 1,
      question: "What was your first pet's name?",
      answer: "••••••••"
    },
    {
      id: 2,
      question: "In what city were you born?",
      answer: "••••••••"
    }
  ]);

  const [deviceSessions, setDeviceSessions] = useState([
    {
      id: 1,
      device: "Chrome on MacBook Pro",
      location: "San Francisco, CA",
      lastActive: "Just now",
      isCurrent: true
    },
    {
      id: 2,
      device: "Safari on iPhone 13",
      location: "San Francisco, CA",
      lastActive: "2 hours ago",
      isCurrent: false
    },
    {
      id: 3,
      device: "Firefox on Windows PC",
      location: "Seattle, WA",
      lastActive: "3 days ago",
      isCurrent: false
    }
  ]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdatePassword = () => {
    console.log("Updating password:", passwordData);
    // Reset form after submission
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  const handleEndSession = (id: number) => {
    setDeviceSessions(prev => prev.filter(session => session.id !== id));
  };

  const handleEndAllOtherSessions = () => {
    setDeviceSessions(prev => prev.filter(session => session.isCurrent));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#141414] mb-6">
        <div className="flex items-center gap-2">
          <ShieldCheck size={24} className="text-[#0D21A1]" />
          Security Settings
        </div>
      </h2>
      
      <div className="border-b border-gray-200 mb-6 pb-6">
        <h3 className="text-lg font-medium text-[#141414] mb-4">
          <div className="flex items-center gap-2">
            <Lock size={18} />
            Password
          </div>
        </h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
          <div className="relative">
            <input
              type="password"
              name="currentPassword"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
            />
            <EyeOff 
              size={18} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" 
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
          <div className="relative">
            <input
              type="password"
              name="newPassword"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
            />
            <EyeOff 
              size={18} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" 
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
            />
            <EyeOff 
              size={18} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" 
            />
          </div>
        </div>
        
        <div className="mb-4">
          <div className="p-3 bg-[#EEF0F2] rounded-lg">
            <h4 className="font-medium text-[#141414] mb-2">Password Requirements:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                Minimum 8 characters
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                At least one uppercase letter
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                At least one number
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                At least one special character
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={handleUpdatePassword}
            className="bg-[#0D21A1] text-white px-6 py-2 rounded-lg hover:bg-[#0A1A80] transition-colors"
          >
            Update Password
          </button>
        </div>
      </div>
      
      <div className="border-b border-gray-200 mb-6 pb-6">
        <h3 className="text-lg font-medium text-[#141414] mb-4">Two-Factor Authentication</h3>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-gray-700">Secure your account with two-factor authentication</p>
            <p className="text-sm text-gray-500">You'll be asked for a verification code when signing in from an unrecognized device</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={twoFactorEnabled}
              onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0D21A1]"></div>
          </label>
        </div>
      </div>
      
      <div className="border-b border-gray-200 mb-6 pb-6">
        <h3 className="text-lg font-medium text-[#141414] mb-4">Security Questions</h3>
        
        <div className="space-y-4 mb-4">
          {securityQuestions.map(question => (
            <div key={question.id} className="p-4 border border-gray-200 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">{question.question}</p>
              <div className="flex items-center justify-between">
                <div className="font-medium text-gray-500">{question.answer}</div>
                <button className="text-[#0D21A1] text-sm hover:text-[#0A1A80] transition-colors">
                  Change Answer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-b border-gray-200 mb-6 pb-6">
        <h3 className="text-lg font-medium text-[#141414] mb-4">Account Security Options</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-700">Session Timeout</p>
              <p className="text-sm text-gray-500">Automatically log out after a period of inactivity</p>
            </div>
            <select
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={sessionTimeout}
              onChange={(e) => setSessionTimeout(e.target.value)}
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
              <option value="240">4 hours</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-700">Login Notifications</p>
              <p className="text-sm text-gray-500">Receive email notifications for new sign-ins</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={loginNotifications}
                onChange={() => setLoginNotifications(!loginNotifications)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0D21A1]"></div>
            </label>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-[#141414]">Active Sessions</h3>
          <button
            onClick={handleEndAllOtherSessions}
            className="text-[#0D21A1] hover:text-[#0A1A80] transition-colors text-sm font-medium"
          >
            End All Other Sessions
          </button>
        </div>
        
        <div className="space-y-3">
          {deviceSessions.map(session => (
            <div 
              key={session.id} 
              className={`p-4 rounded-lg border ${session.isCurrent ? 'border-[#0D21A1] bg-blue-50' : 'border-gray-200'}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-800">{session.device}</p>
                    {session.isCurrent && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Current Device
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    <span>{session.location}</span>
                    <span className="mx-2">•</span>
                    <span>Last active: {session.lastActive}</span>
                  </div>
                </div>
                {!session.isCurrent && (
                  <button
                    onClick={() => handleEndSession(session.id)}
                    className="text-red-600 hover:text-red-800 transition-colors text-sm"
                  >
                    End Session
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          className="bg-[#0D21A1] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#0A1A80] transition-colors"
        >
          <Save size={18} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SecuritySettings;