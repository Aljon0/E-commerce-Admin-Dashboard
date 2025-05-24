import {
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  Download,
  RefreshCw,
  Search,
  Shield,
  User,
  UserCheck,
  XCircle,
} from "lucide-react";
import React, { useState } from "react";

interface ActivityLog {
  id: string;
  user: string;
  role: "admin" | "manager" | "staff";
  action: string;
  details: string;
  timestamp: string;
  status: "success" | "warning" | "error";
  ipAddress: string;
}

const Settings: React.FC = () => {
  const [logs, setLogs] = useState<ActivityLog[]>([
    {
      id: "1",
      user: "john_admin",
      role: "admin",
      action: "User Created",
      details: "Created new staff account for mike_staff",
      timestamp: "2024-05-24T10:30:00Z",
      status: "success",
      ipAddress: "192.168.1.100",
    },
    {
      id: "2",
      user: "sarah_manager",
      role: "manager",
      action: "Product Updated",
      details: "Modified product SKU-001 pricing",
      timestamp: "2024-05-24T09:15:00Z",
      status: "success",
      ipAddress: "192.168.1.101",
    },
    {
      id: "3",
      user: "mike_staff",
      role: "staff",
      action: "Login Failed",
      details: "Multiple failed login attempts",
      timestamp: "2024-05-24T08:45:00Z",
      status: "error",
      ipAddress: "192.168.1.102",
    },
    {
      id: "4",
      user: "john_admin",
      role: "admin",
      action: "Settings Changed",
      details: "Updated system security settings",
      timestamp: "2024-05-23T16:20:00Z",
      status: "warning",
      ipAddress: "192.168.1.100",
    },
    {
      id: "5",
      user: "sarah_manager",
      role: "manager",
      action: "Order Processed",
      details: "Processed order #ORD-2024-001",
      timestamp: "2024-05-23T14:10:00Z",
      status: "success",
      ipAddress: "192.168.1.101",
    },
    {
      id: "6",
      user: "mike_staff",
      role: "staff",
      action: "Customer Added",
      details: "Added new customer record",
      timestamp: "2024-05-23T11:30:00Z",
      status: "success",
      ipAddress: "192.168.1.102",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || log.role === roleFilter;
    const matchesStatus = statusFilter === "all" || log.status === statusFilter;

    let matchesDate = true;
    if (dateFilter !== "all") {
      const logDate = new Date(log.timestamp);
      const today = new Date();
      const daysDiff = Math.floor(
        (today.getTime() - logDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      switch (dateFilter) {
        case "today":
          matchesDate = daysDiff === 0;
          break;
        case "week":
          matchesDate = daysDiff <= 7;
          break;
        case "month":
          matchesDate = daysDiff <= 30;
          break;
      }
    }

    return matchesSearch && matchesRole && matchesStatus && matchesDate;
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  const handleExport = () => {
    const csvContent = [
      [
        "Timestamp",
        "User",
        "Role",
        "Action",
        "Details",
        "Status",
        "IP Address",
      ],
      ...filteredLogs.map((log) => [
        new Date(log.timestamp).toLocaleString(),
        log.user,
        log.role,
        log.action,
        log.details,
        log.status,
        log.ipAddress,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "activity_logs.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin":
        return <Shield className="w-4 h-4 text-red-500" />;
      case "manager":
        return <UserCheck className="w-4 h-4 text-blue-500" />;
      case "staff":
        return <User className="w-4 h-4 text-green-500" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "warning":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case "error":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <CheckCircle className="w-4 h-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      error: "bg-red-100 text-red-800",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          colors[status as keyof typeof colors]
        }`}
      >
        {status}
      </span>
    );
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
  };

  // Activity summary stats
  const activityStats = {
    total: logs.length,
    success: logs.filter((log) => log.status === "success").length,
    warnings: logs.filter((log) => log.status === "warning").length,
    errors: logs.filter((log) => log.status === "error").length,
  };

  return (
    <div className="p-6 bg-[#EEF0F2] min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Settings & Activity Logs
        </h1>
        <p className="text-[#808080]">
          Monitor staff and manager activities across the system
        </p>
      </div>

      {/* Activity Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#808080] text-sm font-medium">
                Total Activities
              </p>
              <p className="text-2xl font-bold text-[#141414]">
                {activityStats.total}
              </p>
            </div>
            <Activity className="w-8 h-8 text-[#0D21A1]" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#808080] text-sm font-medium">Successful</p>
              <p className="text-2xl font-bold text-green-600">
                {activityStats.success}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#808080] text-sm font-medium">Warnings</p>
              <p className="text-2xl font-bold text-yellow-600">
                {activityStats.warnings}
              </p>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#808080] text-sm font-medium">Errors</p>
              <p className="text-2xl font-bold text-red-600">
                {activityStats.errors}
              </p>
            </div>
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#808080] w-5 h-5" />
              <input
                type="text"
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent w-full sm:w-64"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              >
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="staff">Staff</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>

              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D21A1] focus:border-transparent"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw
                className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </button>

            <button
              onClick={handleExport}
              className="flex items-center gap-2 bg-[#0D21A1] hover:bg-[#011638] text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Activity Logs Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#EEF0F2] border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#141414]">
                  Timestamp
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#141414]">
                  User
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#141414]">
                  Action
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#141414]">
                  Details
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#141414]">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#141414]">
                  IP Address
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLogs.map((log) => {
                const { date, time } = formatTimestamp(log.timestamp);
                return (
                  <tr
                    key={log.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#808080]" />
                        <div>
                          <div className="text-sm font-medium text-[#141414]">
                            {date}
                          </div>
                          <div className="text-xs text-[#808080]">{time}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getRoleIcon(log.role)}
                        <div>
                          <div className="font-medium text-[#141414]">
                            {log.user}
                          </div>
                          <div className="text-xs text-[#808080] capitalize">
                            {log.role}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(log.status)}
                        <span className="font-medium text-[#141414]">
                          {log.action}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[#808080] text-sm">
                        {log.details}
                      </span>
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(log.status)}</td>
                    <td className="px-6 py-4">
                      <span className="text-[#808080] text-sm font-mono">
                        {log.ipAddress}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filteredLogs.length === 0 && (
            <div className="text-center py-12">
              <Activity className="w-12 h-12 text-[#808080] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#141414] mb-2">
                No Activities Found
              </h3>
              <p className="text-[#808080]">
                No activities match your current filters.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Pagination (if needed for larger datasets) */}
      {filteredLogs.length > 0 && (
        <div className="mt-6 flex items-center justify-between bg-white rounded-xl shadow-sm p-4">
          <div className="text-sm text-[#808080]">
            Showing {filteredLogs.length} of {logs.length} activities
          </div>
          <div className="text-sm text-[#808080]">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
