import { CreditCard, CheckCircle, Trash2 } from "lucide-react";
import type { PaymentMethodCardProps } from "../utils/types";

const PaymentMethodCard = ({ method, onSetDefault, onRemove }: PaymentMethodCardProps) => {
  const getCardIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'visa':
        return (
          <div className="h-8 w-12 bg-blue-100 rounded flex items-center justify-center text-blue-800 font-bold text-xs">
            VISA
          </div>
        );
      case 'mastercard':
        return (
          <div className="h-8 w-12 bg-red-100 rounded flex items-center justify-center text-red-800 font-bold text-xs">
            MC
          </div>
        );
      case 'amex':
        return (
          <div className="h-8 w-12 bg-green-100 rounded flex items-center justify-center text-green-800 font-bold text-xs">
            AMEX
          </div>
        );
      default:
        return (
          <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center">
            <CreditCard size={16} className="text-gray-600" />
          </div>
        );
    }
  };

  return (
    <div className={`border ${method.isDefault ? 'border-[#0D21A1]' : 'border-gray-200'} rounded-lg p-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {getCardIcon(method.type)}
          <div>
            <p className="font-medium text-gray-800">{method.number}</p>
            <div className="text-sm text-gray-500">
              <span>Expires {method.expiryDate}</span>
              <span className="mx-2">•</span>
              <span>{method.holderName}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {method.isDefault ? (
            <div className="flex items-center gap-1 text-[#0D21A1] text-sm">
              <CheckCircle size={16} />
              Default
            </div>
          ) : (
            <button 
              onClick={onSetDefault}
              className="text-sm text-[#0D21A1] hover:text-[#0A1A80] transition-colors"
            >
              Set as Default
            </button>
          )}
          
          <button 
            onClick={onRemove}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;