const ProfileHeader = ({ avatar, name, role }) => {
  return (
    <div className="px-6 text-white space-y-4 pb-4 border-b-[0.5px] border-gray-800">
      <div>
        <span className="text-sm text-yellow-400">Home </span>
        <span className="text-gray-500">/ {name}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div>
            <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
          </div>
          <div className="m-0 p-0">
            <h2 className="text-[21px] font-[600]">{name}</h2>
            <p className="text-sm">{role}</p>
          </div>
        </div>
        <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 transition cursor-pointer">
          Shortlist for interview
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
