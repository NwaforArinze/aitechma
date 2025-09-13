import React from "react";

const SummaryCard = ({ value, title, subTitle }) => {
  return (
    <div>
      <div className="relative overflow-hidden bg-[#1C1D22] p-4 rounded-lg shadow-md border-[2px] border-[#2A2B31] hover:shadow-lg transition">
        <img
          src="/clouds-svgrepo.svg"
          alt=""
          className="absolute top-[-30%] left-[-12%] w-30 h-30 rotate-45"
        />

        <h2 className=" mt-6 text-[26px]">{value}</h2>
        <h3 className="py-1.5 text-xl">{title}</h3>
        <p className="text-gray-400">{subTitle}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
