import React from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import {
  Zap,
  CircleUser,
  ChevronDownIcon,
  UserPen,
  UserCog,
  LogOut,
  Menu as MenuIcon,
} from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="w-full overflow-hidden bg-[#1C1D22] h-16 flex items-center justify-between px-4 md:px-6">
      {/* Left: Logo + Mobile Toggle */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-white focus:outline-none"
        >
          <MenuIcon size={24} />
        </button>

        <div className="relative flex flex-col justify-between items-center mt-2">
          <span className="text-yellow-500 absolute -top-1">
            <Zap size={14} />
          </span>
          <h1 className="font-[600] text-3xl px-3 text-white">aitechma</h1>
        </div>
      </div>

      {/* Right: User Profile */}
      <div className="flex justify-center items-center gap-1">
        <CircleUser size={30} color="white" />
        <div className="hidden md:flex flex-col text-gray-400">
          <span className="text-sm">Abass</span>
          <span className="text-xs text-gray-400">Tech Employer</span>
        </div>
        <div>
          <Menu>
            <MenuButton className="p-1 ml-3 font-semibold text-white focus:outline-none rounded transition duration-100 ease-in">
              <ChevronDownIcon className="size-4 fill-white/60" />
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 mt-5 origin-top-right rounded-lg border border-white/5 bg-zinc-700 p-1 text-sm/6 text-white transition duration-100 ease-out focus:outline-none data-closed:scale-95 data-closed:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                  <UserPen className="size-4 fill-white/30" />
                  Your Profile
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                  <UserCog className="size-4 fill-white/30" />
                  Settings
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                  <LogOut className="size-4 fill-white/30" />
                  Sign Out
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
