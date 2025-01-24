import React from "react";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineDashboard, MdOutlineHome } from "react-icons/md";

function SideNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <nav className="flex justify-between items-center bg-zinc-500 h-full py-4 ">
        <div className="flex gap-2 mb-2 lg:mb-0 ">
          <IoSearch size={25} className="absolute mt-2 ml-2 text-zinc-500 " />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-zinc-500"
          />
          <button className="lg:px-8 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-600">
            Search
          </button>
        </div>
        <div>
          <h1>Fady Mohy</h1>
        </div>
      </nav>
    </div>
  );
}

export default SideNav;
