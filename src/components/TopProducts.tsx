import { Box } from "lucide-react";
import type { TopProductsProps } from "../utils/types";
export const TopProducts = ({ products }: TopProductsProps) => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
            <Box size={20} className="text-gray-500" />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-medium">{product.name}</p>
            <p className="text-xs text-gray-500">{product.sold} sold</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{product.revenue}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TopProducts;