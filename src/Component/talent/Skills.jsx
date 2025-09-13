import React from "react";

const Skills = ({
  className,
  specialization,
  seniority,
  firstEarning,
  stacks,
}) => {
  return (
    <div
      className={`border-[2px] border-[#2A2B31] rounded-lg bg-[#1C1D22] p-4 space-y-4 text-gray-300 ${className}`}
    >
      <h3 className="text-[16px] font-[600]">Skills</h3>
      <div className="flex gap-6">
        <div className="flex flex-col">
          <span className="text-[13px]">Specialization</span>
          <span className="text-white text-[16px] font-[600]">
            {specialization}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[13px]">Seniority</span>
          <span className="text-white text-[16px] font-[600]">{seniority}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[13px]">First Earning</span>
          <span className="text-white text-[16px] font-[600]">
            {firstEarning}
          </span>
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-[13px]">Stack</h4>

        <div className="flex flex-wrap gap-4">
          {stacks?.map((stack, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-2xl bg-gray-600/50 px-2.5 py-1"
            >
              <span className="text-[15px]">{stack}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
