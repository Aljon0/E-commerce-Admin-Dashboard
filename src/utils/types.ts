export interface SalesData {
  name: string;
  sales: number;
}

export interface RevenueData {
  name: string;
  revenue: number;
}

export interface CategoryData {
  name: string;
  value: number;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: string;
}

export interface Product {
  id: number;
  name: string;
  sold: number;
  revenue: string;
  image: string;
}

export interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

export interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed: boolean;
}

export interface StatusBadgeProps {
  status: string;
}

export interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: 'up' | 'down';
  trendValue: string;
}

export interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  filters?: boolean;
}

export interface OrdersTableProps {
  orders: Order[];
}

export interface TopProductsProps {
  products: Product[];
}

export type BellProps = {
    size: number;
    className: string;
}

export type CalendarProps = {
    size: number;
    className: string;
}

export type FileDownProps = {
    size: number;
    className: string;
}

export type PaymentMethod = {
  type: string;
  number: string;
  expiryDate: string;
  holderName: string;
  isDefault: boolean;
}

export type PaymentMethodCardProps = {
    method: PaymentMethod;
    onSetDefault: () => void;
    onRemove: () => void;
}