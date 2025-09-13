import { useParams } from "react-router-dom";
import { sampleTalents } from "../Component/data/talents";
import ProfileHeader from "../Component/talent/ProfileHeader";
import WorkNature from "../Component/talent/WorkNatures";
import WorkRenumeration from "../Component/talent/WorkRenumeration";
import Skills from "../Component/talent/Skills";
import WorkExperience from "../Component/talent/WorkExperience";
import LinksCard from "../Component/talent/LinksCard";

const TalentProfile = () => {
  const { id } = useParams();
  const t = sampleTalents.find((talent) => talent.id === Number(id));

  if (!t) return <div className="text-white">Talent not found.</div>;

  return (
    <div className="space-y-6">
      <ProfileHeader role={t.role} name={t.name} avatar={t.avatar} />
      <div className="flex flex-col md:flex-row w-full gap-6">
        <WorkNature
          className="flex-[1.9]"
          jobType={t.jobType}
          workMode={t.workMode}
          availableIn={t.availableIn}
        />
        <WorkRenumeration
          className="flex-[1.6]"
          earningSchedule={t.earningSchedule}
          minRate={t.minRate}
          maxRate={t.maxRate}
          preferredCurrency={t.preferredCurrency}
        />
        <Skills
          className="flex-[2]"
          specialization={t.specialization}
          seniority={t.seniority}
          firstEarning={t.firstEarning}
          stacks={t.stacks}
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-6">
        <WorkExperience className="flex-[2]" experiences={t.workExperience} />
        <LinksCard className="flex-[1]" cardLinks={t.links} />
      </div>
    </div>
  );
};

export default TalentProfile;
