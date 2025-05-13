import type { ReactNode } from "react";

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

export type PaymentMethodCardProps = {
    type: string;
    selected: boolean;
}
export interface Payment {
  id: string;
  customer: string;
  amount: string;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
}
export interface PaymentMethod {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}
export interface PaymentSummaryCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  bgColor: string;
}

export type RoleOptionProps = {
  role: string;
  description: string;
  onClick: () => void;
  icon: ReactNode;
}

export type AccountInfoProps = {
  role: string;
  username: string;
  password: string;
}