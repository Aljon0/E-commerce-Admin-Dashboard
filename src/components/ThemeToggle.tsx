import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  compact?: boolean;
}

export const ThemeToggle = ({ compact = false }: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Check system preference or saved preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (compact) {
    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun size={20} className="text-gray-200" /> : <Moon size={20} className="text-gray-200" />}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center py-3 px-4 rounded-lg bg-[#EEF0F2] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <>
          <Sun size={18} className="mr-2 text-[#141414] dark:text-gray-200" />
          <span className="text-[#141414] dark:text-gray-200 font-medium">Light Mode</span>
        </>
      ) : (
        <>
          <Moon size={18} className="mr-2 text-[#141414] dark:text-gray-200" />
          <span className="text-[#141414] dark:text-gray-200 font-medium">Dark Mode</span>
        </>
      )}
    </button>
  );
};