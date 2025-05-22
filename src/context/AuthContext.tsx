import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string | null;
  login: (username: string, password: string, role: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  // Fixed account credentials
  const accounts = {
    admin: { username: "admin", password: "admin123", role: "admin" },
    manager: { username: "manager", password: "manager123", role: "manager" },
    staff: { username: "staff", password: "staff123", role: "staff" },
  };

  const login = (username: string, password: string, role: string) => {
    const roleKey = role.toLowerCase() as keyof typeof accounts;
    const account = accounts[roleKey];

    if (
      account &&
      username === account.username &&
      password === account.password
    ) {
      setIsAuthenticated(true);
      setUserRole(account.role);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
