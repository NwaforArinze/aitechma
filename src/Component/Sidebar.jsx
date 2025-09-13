import { Link, NavLink, useLocation } from "react-router-dom";
import {
  House,
  FileDown,
  MessagesSquare,
  Newspaper,
  ReceiptText,
  Settings,
  BadgeQuestionMark,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  // Home is active on `/` or anything under `/talents/...`
  const isHomeActive =
    location.pathname === "/" || location.pathname.startsWith("/talents/");

  const navItems = [
    {
      key: "requests",
      label: "Requests",
      to: "/requests",
      icon: <FileDown size={16} />,
    },
    {
      key: "interviews",
      label: "Interviews",
      to: "/interviews",
      icon: <MessagesSquare size={16} />,
    },
    {
      key: "offers",
      label: "Offers",
      to: "/offers",
      icon: <Newspaper size={16} />,
    },
    {
      key: "bills",
      label: "Bills",
      to: "/bills",
      icon: <ReceiptText size={16} />,
    },
  ];

  const bottomItems = [
    { key: "settings", to: "/settings", icon: <Settings size={22} /> },
    { key: "help", to: "/help", icon: <BadgeQuestionMark size={22} /> },
  ];

  return (
    <div className="flex flex-col bg-[#1C1D22] text-gray-100 w-16 p-4">
      <div className="flex-1">
        <div className="mt-12 space-y-1">
          {/* Home Item — with custom active logic */}
          <Link
            to="/"
            className="flex flex-col justify-center items-center p-2"
          >
            <span
              className={`rounded-lg p-2 transition hover:text-yellow-500 ${
                isHomeActive
                  ? "bg-yellow-300/20 text-yellow-500"
                  : "bg-zinc-800 text-gray-400"
              }`}
            >
              <House size={16} />
            </span>
            <span
              className={`text-[12px] transition ${
                isHomeActive ? "text-white" : "text-gray-400"
              }`}
            >
              Home
            </span>
          </Link>

          {/* Other Nav Items */}
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              className="flex flex-col justify-center items-center p-2"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`rounded-lg p-2 transition hover:text-yellow-500 ${
                      isActive
                        ? "bg-yellow-300/20 text-yellow-500"
                        : "bg-zinc-800 text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`text-[12px] transition ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom Items (Settings / Help) */}
      <div className="mt-4">
        {bottomItems.map((item) => (
          <NavLink
            key={item.key}
            to={item.to}
            className="flex justify-center items-center p-2 mb-2 hover:bg-gray-700 rounded"
          >
            {({ isActive }) => (
              <span className={isActive ? "text-yellow-500" : "text-gray-400"}>
                {item.icon}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
