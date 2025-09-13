import React from "react";

const WorkRenumeration = ({
  className,
  minRate,
  maxRate,
  preferredCurrency,
  earningSchedule,
}) => {
  return (
    <div
      className={`border-[2px] border-[#2A2B31] rounded-lg bg-[#1C1D22] p-4 space-y-4 text-gray-300 ${className}`}
    >
      <h3 className="text-[16px] font-[600]">Work Renumeration</h3>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col pb-5">
            <span className="text-[13px]">Earning Schedule</span>
            <span className="text-white text-[16px] font-[600]">
              {earningSchedule}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[13px]">Min. Rate</span>
            <span className="text-white text-[16px] font-[600]">{minRate}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col pb-5">
            <span className="text-[13px]">Preferred Currency</span>
            <span className="text-white text-[16px] font-[600]">
              {preferredCurrency}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px]">Max. Rate</span>
            <span className="text-white text-[16px] font-[600]">{maxRate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkRenumeration;
