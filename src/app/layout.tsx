"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import useDarkMode from "../hooks/useDarkMode";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <div className="min-h-screen min-w-screen bg-gray-50 dark:bg-secondary flex justify-center items-center">
          <Navbar
            isMinimized={false}
            setIsDarkMode={setIsDarkMode}
            isDarkMode={isDarkMode}
          />
          <div className="flex-1 -translate-y-1/2">{children}</div>
        </div>
      </body>
    </html>
  );
}
