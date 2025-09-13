// src/pages/Interviews.jsx
import { NavLink, Outlet } from "react-router-dom";

const Interviews = () => {
  return (
    <div className="text-white w-full px-4">
      <h2 className="text-2xl font-semibold mb-4">Interviews</h2>

      {/* Tabs */}
      <div className="flex space-x-6 mb-4">
        <NavLink
          to="talent"
          className={({ isActive }) =>
            `pb-2 ${
              isActive
                ? "text-white border-b-2 border-yellow-400"
                : "text-gray-400"
            }`
          }
        >
          Talent Interviews
        </NavLink>
        <NavLink
          to="calendar"
          className={({ isActive }) =>
            `pb-2 ${
              isActive
                ? "text-white border-b-2 border-yellow-400"
                : "text-gray-400"
            }`
          }
        >
          Calendar
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Interviews;
