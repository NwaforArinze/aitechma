import React from "react";

const Topbar = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const currentDate = today.toLocaleDateString(undefined, options);
  return (
    <div>
      <h1 className="text-[22px] font-medium">Hi Tyms</h1>
      <div className="flex items-center mt-0.5">
        <img
          src="sun-behind-cloud-svgrepo-com.svg"
          className="w-3 h-3 inline-block mr-1"
          alt=""
        />
        <p className="text-[16px] text-gray-400">{currentDate}</p>
      </div>
    </div>
  );
};

export default Topbar;
