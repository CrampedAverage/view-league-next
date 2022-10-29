"use client";
import React, { useEffect, useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import Navbar from "../Navbar";

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = (props: LayoutProps) => {
  const [minimiseNav, setMinimiseNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 dark:bg-secondary flex">
      <Navbar
        isMinimized={false}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
      />
      <div className="w-full flex relative">{props.children}</div>
    </div>
  );
};

export default Layout;
