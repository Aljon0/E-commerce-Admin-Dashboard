import type { StatusBadgeProps } from "../utils/types";

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  let bgColor = "bg-gray-200 text-gray-800";
  
  switch(status.toLowerCase()) {
    case 'delivered':
      bgColor = "bg-green-100 text-green-800";
      break;
    case 'processing':
      bgColor = "bg-blue-100 text-blue-800";
      break;
    case 'shipped':
      bgColor = "bg-purple-100 text-purple-800";
      break;
    case 'pending':
      bgColor = "bg-yellow-100 text-yellow-800";
      break;
    case 'cancelled':
      bgColor = "bg-red-100 text-red-800";
      break;
  }
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${bgColor}`}>
      {status}
    </span>
  );
};