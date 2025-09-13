import React from "react";
import RequestTable from "../Component/RequestTable";

const Requests = () => {
  return (
    <div className="text-white w-full px-4">
      <h3 className="text-[22px] font-semibold mb-3">Talent Requests</h3>
      <RequestTable />
    </div>
  );
};

export default Requests;
