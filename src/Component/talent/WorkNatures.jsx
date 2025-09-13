const WorkNature = ({ className, jobType, workMode, availableIn }) => {
  const countryFlagMap = {
    "United Kingdom": "/united-kingdom-uk-svgrepo-com.svg",
    Canada: "/canada-svgrepo-com.svg",
    Australia: "/australia-svgrepo-com.svg",
  };
  return (
    <div
      className={`border-[2px] border-[#2A2B31] rounded-lg bg-[#1C1D22] p-4 space-y-4 text-gray-300 ${className}`}
    >
      <h3 className="text-[16px] font-[600]">Work Nature</h3>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <span className="text-[13px]">Job Type Interest</span>
          <span className="text-white font-[600] text-[16px]">{jobType}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[13px]">Work Mode</span>
          <span className="text-white font-[600] text-[16px]">{workMode}</span>
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-[13px]">Available in</h4>

        <div className="flex flex-wrap gap-4">
          {availableIn.map((country) => (
            <div
              key={country}
              className="flex items-center gap-1 rounded-2xl bg-gray-600/50 px-2.5 py-1"
            >
              <img
                src={countryFlagMap[country]}
                alt={country}
                title={country}
                className="w-4 h-4 object-cover rounded-sm"
              />
              <span className="text-[14px] ">{country}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkNature;
