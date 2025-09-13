import React from "react";
import { AlertCircle } from "lucide-react";

const Notifications = ({ message }) => {
  return (
    <div className="flex items-center bg-zinc-700 p-3 my-5 rounded-lg shadow-md ">
      <span className="text-yellow-500 bg-yellow-300/20 p-1.5 rounded mr-4">
        <AlertCircle size={16} />
      </span>
      <p className="text-sm font-[500] ">{message}</p>
    </div>
  );
};

export default Notifications;
