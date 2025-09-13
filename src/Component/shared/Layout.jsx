import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";

const layout = () => {
  return (
    <div className="flex flex-row h-screen w-screen bg-gray-950 overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="flex-shrink-0">
          <Header />
        </div>
        <div className="flex-1 overflow-y-auto p-6 border-[2px] border-[#2A2B31] rounded-t-sm bg-[#0F1014]">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default layout;
