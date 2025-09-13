import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen w-screen bg-gray-950 overflow-hidden">
      {/* Sidebar on mobile (overlay) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Sidebar Panel */}
          <div className="w-64 h-full bg-[#1C1D22] shadow-lg relative z-50">
            <Sidebar closeSidebar={closeSidebar} />
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={closeSidebar}
          ></div>
        </div>
      )}

      {/* Sidebar on desktop */}
      <div className="hidden md:flex w-16">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <div className="flex-shrink-0">
          <Header toggleSidebar={toggleSidebar} />
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-6 md:p-6 border-[2px] border-[#2A2B31] rounded-t-sm bg-[#0F1014]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
