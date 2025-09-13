import { BriefcaseBusiness } from "lucide-react";

const WorkExperience = ({ className, experiences }) => {
  return (
    <div className={` ${className}`}>
      <h3 className="text-gray-300 text-lg pb-4">Work Experience</h3>
      <div>
        {experiences.map((experience, i) => (
          <div
            key={i}
            className="border-[2px] border-[#2A2B31] rounded-lg bg-[#1C1D22] p-4 space-y-4 mb-5 text-gray-300"
          >
            <div className="flex gap-4 items-start mb-3">
              <div className="mt-1 p-2 bg-zinc-900 border border-gray-700 rounded-lg">
                <BriefcaseBusiness size={20} />
              </div>

              <div className="flex flex-col space-y-0.5">
                <strong className="mb-0.5">{experience.company}</strong>
                <span className="text-sm">{experience.role}</span>
                <span className="text-sm text-zinc-400">
                  {experience.period}
                </span>
                <strong className="text-sm mb-1 my-1">
                  Skills: {experience.skills.join(" . ")}
                </strong>
                <p className="text-zinc-400">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
