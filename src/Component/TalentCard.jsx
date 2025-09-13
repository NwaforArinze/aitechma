import React from "react";
import { School } from "lucide-react";

const TalentCard = ({
  avatar,
  name,
  role,
  experience,
  PaySchedule,
  payRange,
  skills,
}) => {
  return (
    <div className="bg-[#1C1D22] p-5 rounded-lg shadow-md border-[2px] border-[#2A2B31] hover:shadow-lg transition space-y-2">
      <div className="flex items-center space-x-4">
        <img src={avatar} alt={name} className="w-11 h-11 rounded-full" />
        <div className="flex flex-col">
          <p className="text-[16px] font-medium">{name}</p>
          <p className="text-sm text-gray-100">{role}</p>
        </div>
      </div>
      <div className="w-[50%] flex items-center space-x-2 text-gray-400 bg-gray-600/20 p-1 rounded">
        <School size={16} />
        <span className="text-xs">{experience}</span>
      </div>
      <div className="m-0 p-0">
        <p className="text-sm text-gray-200">
          Pay Schedule:{" "}
          <span className="text-[16px] text-white font-medium">
            {PaySchedule}
          </span>
        </p>
        <p className="text-sm text-gray-100">
          Pay Range:{" "}
          <span className="text-[16px] text-white font-medium">{payRange}</span>
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {skills.slice(0, 3).map((skill) => (
          <div
            className="bg-gray-600/20 py-1 px-3 rounded-full border border-gray-700 text-sm text-gray-300"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentCard;
