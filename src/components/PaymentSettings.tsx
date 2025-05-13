import { useState } from "react";
import { Save, CreditCard, Plus } from "lucide-react";
import PaymentMethodCard from "./PaymentMethodCard";

const PaymentSettings = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "visa",
      number: "**** **** **** 4242",
      expiryDate: "12/25",
      holderName: "John Doe",
      isDefault: true
    },
    {
      id: 2,
      type: "mastercard",
      number: "**** **** **** 5678",
      expiryDate: "08/26",
      holderName: "John Doe",
      isDefault: false
    }
  ]);

  const [billingAddress, setBillingAddress] = useState({
    address: "123 Commerce St",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    country: "United States"
  });

  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const [newCardData, setNewCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    holderName: ""
  });

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBillingAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleNewCardChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewCardData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddCard = () => {
    // In a real app, you would validate and process the card
    console.log("Adding new card:", newCardData);
    setShowAddCardForm(false);
    setNewCardData({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      holderName: ""
    });
  };

  const handleSetDefault = (id: number) => {
    setPaymentMethods(prevMethods => 
      prevMethods.map(method => ({
        ...method,
        isDefault: method.id === id
      }))
    );
  };

  const handleRemoveCard = (id: number) => {
    setPaymentMethods(prevMethods => 
      prevMethods.filter(method => method.id !== id)
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#141414] mb-6">Payment Settings</h2>
      
      <div className="border-b border-gray-200 mb-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-[#141414]">
            <div className="flex items-center gap-2">
              <CreditCard size={20} />
              Payment Methods
            </div>
          </h3>
          {!showAddCardForm && (
            <button 
              onClick={() => setShowAddCardForm(true)}
              className="flex items-center gap-2 text-[#0D21A1] hover:text-[#0A1A80] transition-colors"
            >
              <Plus size={18} />
              Add Payment Method
            </button>
          )}
        </div>
        
        <div className="space-y-4">
          {paymentMethods.map(method => (
            <PaymentMethodCard 
              key={method.id}
              method={method}
              onSetDefault={() => handleSetDefault(method.id)}
              onRemove={() => handleRemoveCard(method.id)}
            />
          ))}
          
          {showAddCardForm && (
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-[#141414] mb-4">Add New Card</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="**** **** **** ****"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
                    value={newCardData.cardNumber}
                    onChange={handleNewCardChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                  <input
                    type="text"
                    name="holderName"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
                    value={newCardData.holderName}
                    onChange={handleNewCardChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
                    value={newCardData.expiryDate}
                    onChange={handleNewCardChange}
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="***"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
                    value={newCardData.cvv}
                    onChange={handleNewCardChange}
                  />
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <button 
                  onClick={() => setShowAddCardForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddCard}
                  className="bg-[#0D21A1] text-white px-4 py-2 rounded-lg hover:bg-[#0A1A80] transition-colors"
                >
                  Add Card
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium text-[#141414] mb-4">Billing Address</h3>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
          <input
            type="text"
            name="address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
            value={billingAddress.address}
            onChange={handleBillingChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <input
              type="text"
              name="city"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={billingAddress.city}
              onChange={handleBillingChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
            <input
              type="text"
              name="state"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={billingAddress.state}
              onChange={handleBillingChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ZIP/Postal Code</label>
            <input
              type="text"
              name="zipCode"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              value={billingAddress.zipCode}
              onChange={handleBillingChange}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <select
            name="country"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
            value={billingAddress.country}
            onChange={handleBillingChange}
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
          </select>
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

export default PaymentSettings;