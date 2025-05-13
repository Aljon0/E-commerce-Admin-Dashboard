import { StatusBadge } from "./StatusBadge";
import type { OrdersTableProps } from "../utils/types";
export const OrdersTable = ({ orders }: OrdersTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-4 px-4 text-sm font-medium">{order.id}</td>
              <td className="py-4 px-4 text-sm">{order.customer}</td>
              <td className="py-4 px-4 text-sm text-gray-500">{order.date}</td>
              <td className="py-4 px-4 text-sm font-medium">{order.amount}</td>
              <td className="py-4 px-4">
                <StatusBadge status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;