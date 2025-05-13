import { useState, useEffect } from "react";
import { LogOut, X, Check } from "lucide-react";

interface LogoutAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LogoutAlert = ({ isOpen, onClose, onConfirm }: LogoutAlertProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsExiting(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-opacity-50 transition-opacity duration-200">
      <div 
        className={`bg-white dark:bg-[#141414] rounded-xl shadow-xl max-w-md w-full mx-4 p-6 transform transition-all duration-200 ${
          isExiting ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full mb-4">
            <LogOut size={28} className="text-red-600 dark:text-red-400" />
          </div>
          
          <h3 className="text-xl font-bold text-[#141414] dark:text-white mb-2">
            Logout Confirmation
          </h3>
          
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Are you sure you want to log out of your ShopDash account?
          </p>
          
          <div className="flex w-full space-x-3">
            <button
              onClick={handleClose}
              className="flex-1 py-3 px-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-[#EEF0F2] dark:bg-gray-800 text-[#141414] dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex justify-center items-center"
            >
              <X size={18} className="mr-2" />
              Cancel
            </button>
            
            <button
              onClick={onConfirm}
              className="flex-1 py-3 px-4 rounded-lg bg-[#0D21A1] hover:bg-[#0D21A1]/90 text-white font-medium transition-colors flex justify-center items-center"
            >
              <Check size={18} className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};