import { Globe } from "lucide-react";

export const CustomerDemographics = () => {
  return (
    <>
      <div className="flex justify-center mb-4">
        <Globe size={200} className="text-[#0D21A1]/20" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#EEF0F2] p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">64%</p>
          <p className="text-xs text-gray-500">North America</p>
        </div>
        <div className="bg-[#EEF0F2] p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">23%</p>
          <p className="text-xs text-gray-500">Europe</p>
        </div>
        <div className="bg-[#EEF0F2] p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">13%</p>
          <p className="text-xs text-gray-500">Asia</p>
        </div>
      </div>
    </>
  );
};

export default CustomerDemographics