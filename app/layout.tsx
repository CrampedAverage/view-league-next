"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import useDarkMode from "../hooks/useDarkMode";
import "./globals.css";

function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <html>
      <head>
        <title>viewLeague</title>
        <meta name="description" content="Search for any league Player" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="relative min-h-screen min-w-screen bg-gray-50 dark:bg-secondary flex justify-center ">
          <Navbar
            isMinimized={isMinimized}
            setIsDarkMode={setIsDarkMode}
            isDarkMode={isDarkMode}
            setIsMinimized={setIsMinimized}
          />
          <div className="flex-1 relative">
            {children}
            <div id="modal" />
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
