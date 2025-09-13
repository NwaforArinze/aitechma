import Topbar from "../Component/Topbar";
import Notifications from "../Component/Notifications";
import SummaryCard from "../Component/SummaryCard";
import TalentCard from "../Component/TalentCard";
import { Link } from "react-router-dom";

const Home = () => {
  const talents = [
    {
      id: 1,
      avatar: "/user2.jpg",
      name: "Mohammed Adepoju",
      role: "Product Designer",
      experience: "10 years experience",
      PaySchedule: "Weekly",
      payRange: "$7,000",
      skills: ["Figma", "Adobe XD", "Illustrator"],
    },
    {
      id: 2,
      avatar: "/user2.jpg",
      name: "Jane Doe",
      role: "Frontend Developer",
      experience: "5 years experience",
      PaySchedule: "Weekly",
      payRange: "$6,000",
      skills: ["Figma", "Adobe XD", "Illustrator"],
    },
    {
      id: 3,
      avatar: "/user2.jpg",
      name: "John Smith",
      role: "Backend Developer",
      experience: "8 years experience",
      PaySchedule: "Weekly",
      payRange: "$8,500",
      skills: ["Figma", "Adobe XD", "Illustrator"],
    },
  ];
  return (
    <div className="text-white z-10 mx-4 space-y-4">
      <Topbar />
      <Notifications
        message="We are currently reviewing your profile. You will be notified once you
        are verified"
      />
      <div className="w-[94%] grid grid-cols-1 lg:grid-cols-4 gap-4">
        <SummaryCard
          value="4"
          title="Talent Requests"
          subTitle="Click to see your talent requests"
        />
        <SummaryCard
          value="3"
          title="Talent Interviews"
          subTitle="click to see your interviews"
        />
        <SummaryCard
          value="5"
          title="Talent Offers"
          subTitle="Click to create and see offers"
        />
        <SummaryCard
          value="1"
          title="Bills"
          subTitle="Click to see your bills"
        />
      </div>
      <h2 className="text-[22px] font-medium font-sans">Recommended Talents</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {talents.map((talent) => (
          <Link
            to={`/talents/${talent.id}`}
            key={talent.id}
            state={talent}
            className="block"
          >
            <TalentCard {...talent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
