"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { MdOutlineDashboard, MdOutlineHome } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import SideNav from "./SideNav";

function SideBar({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <aside
          className={`${
            isSidebarOpen ? "w-48" : "w-16"
          } pt-20 fixed left-0 top-0 h-full bg-zinc-500 flex flex-col justify-between transition-all duration-300 ease-in-out overflow-y-auto`}>
          <div className="">
            <li
              className={`group flex items-center ${
                isSidebarOpen ? "px-3 justify-start" : "px-4 justify-center"
              } py-2 text-md text-black hover:bg-black hover:text-white rounded-lg cursor-pointer font-medium`}>
              <Link href="/">
                <div
                  className={`flex items-center ${
                    isSidebarOpen ? "gap-2" : ""
                  }`}>
                  <MdOutlineHome size={30} />
                  {isSidebarOpen && <span>Home</span>}
                </div>
              </Link>
            </li>
            <div
              className={`mb-10 flex ${
                isSidebarOpen ? "justify-end" : "justify-center"
              }`}>
              <button
                onClick={toggleSidebar}
                aria-label="Toggle Sidebar"
                title="Toggle Sidebar"
                className={`hover:bg-black hover:text-white px-[11px] py-2 rounded-lg ${
                  isSidebarOpen ? "pt-2 mr-2" : "pt-2"
                }`}>
                {isSidebarOpen ? (
                  <TbLayoutSidebarLeftCollapse size={25} />
                ) : (
                  <TbLayoutSidebarRightCollapse size={25} />
                )}
              </button>
            </div>
            <nav>
              <ul className="space-y-3 flex-col pb-3">
                <li
                  className={`group flex items-center ${
                    isSidebarOpen ? "px-3 justify-start" : "px-4 justify-center"
                  } py-2 text-md text-black hover:bg-black hover:text-white rounded-lg cursor-pointer font-medium`}>
                  <Link href="/">
                    <div
                      className={`flex items-center ${
                        isSidebarOpen ? "gap-2" : ""
                      }`}>
                      <MdOutlineHome size={30} />
                      {isSidebarOpen && <span>Home</span>}
                    </div>
                  </Link>
                </li>
                <li
                  className={`group flex items-center ${
                    isSidebarOpen ? "px-3 justify-start" : "px-4 justify-center"
                  } py-2 text-md text-black hover:bg-black hover:text-white rounded-lg cursor-pointer font-medium`}>
                  <Link href="/Dashboard">
                    <div
                      className={`flex items-center ${
                        isSidebarOpen ? "gap-2" : ""
                      }`}>
                      <MdOutlineDashboard size={25} />
                      {isSidebarOpen && <span>Overview</span>}
                    </div>
                  </Link>
                </li>
                <li
                  className={`group flex items-center ${
                    isSidebarOpen ? "px-3 justify-start" : "px-4 justify-center"
                  } py-2 text-md text-black hover:bg-black hover:text-white rounded-lg cursor-pointer font-medium`}>
                  <Link href="/Dashboard/Quizzes">
                    <div
                      className={`flex items-center ${
                        isSidebarOpen ? "gap-2" : ""
                      }`}>
                      <FaRegQuestionCircle size={25} />
                      {isSidebarOpen && <span>Quizzes</span>}
                    </div>
                  </Link>
                </li>
                <li
                  className={`group flex items-center ${
                    isSidebarOpen ? "px-3 justify-start" : "px-4 justify-center"
                  } py-2 text-md text-black hover:bg-black hover:text-white rounded-lg cursor-pointer font-medium`}>
                  <Link href="/profile">
                    <div
                      className={`flex items-center ${
                        isSidebarOpen ? "gap-2" : ""
                      }`}>
                      <CgProfile size={25} />
                      {isSidebarOpen && <span>Profile</span>}
                    </div>
                  </Link>
                </li>

                <li
                  className={`group flex items-center ${
                    isSidebarOpen ? "px-3 justify-start" : "px-4 justify-center"
                  } py-2 text-md text-black hover:bg-black hover:text-white rounded-lg cursor-pointer font-medium`}>
                  <Link href="/settings">
                    <div
                      className={`flex items-center ${
                        isSidebarOpen ? "gap-2" : ""
                      }`}>
                      <IoSettingsOutline size={26} />
                      {isSidebarOpen && <span>Settings</span>}
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <hr />
        <main
          className={`flex-1 overflow-y-auto bg-gray-100 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "ml-48" : "ml-[55px]"
          }`}>
          <div className="">
            <SideNav />
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

export default SideBar;
