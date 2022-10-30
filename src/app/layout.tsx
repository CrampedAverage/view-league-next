"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import useDarkMode from "../hooks/useDarkMode";
import "../styles/output.css";

function RootLayout({ children }: { children: React.ReactNode }) {
  const [minimiseNav, setMinimiseNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <html>
      <head>
        <title>viewLeague</title>
        <meta name="description" content="Search for any league Player" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="relative min-h-screen min-w-screen bg-gray-50 dark:bg-secondary flex justify-center items-center">
          <Navbar
            isMinimized={false}
            setIsDarkMode={setIsDarkMode}
            isDarkMode={isDarkMode}
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
