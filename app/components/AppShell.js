"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { PiChatCircleDotsFill } from "react-icons/pi";
import { IoNotificationsCircle } from "react-icons/io5";

function AppShell() {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <section>
        <header className="bg-zinc-100  rounded-md mx-auto text-white py-5 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col justify-center lg:flex-row items-center gap-5">
            <div className="text-start">
              <Link className="block text-teal-600" href="/">
                <Image
                  className="w-25 h-15"
                  src="/Assets/Logo.png"
                  alt="Logo"
                  width={60}
                  height={10}
                />
              </Link>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for something"
                className="w-full lg:w-[374px] bg-zinc-100 text-gray-400 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-zinc-100 rounded-full flex items-center justify-center">
              <Link href="#">
                <PiChatCircleDotsFill
                  size={35}
                  className="text-zinc-800 hover:text-red-600 transition duration-300"
                />
              </Link>
            </div>
            <div className="h-12 w-12 bg-zinc-100 rounded-full flex items-center justify-center">
              <Link href="#">
                <IoNotificationsCircle
                  size={35}
                  className="text-zinc-800 hover:text-red-600 transition duration-300"
                />
              </Link>
            </div>
            <div className="h-12 w-12 bg-zinc-100 rounded-full flex items-center justify-center">
              <Link href="#">
                <FaUserCircle
                  size={30}
                  className="text-zinc-800 hover:text-red-600 transition duration-300"
                />
              </Link>
            </div>
          </div>
        </header>
        <div className="relative px-5 md:px-20  mx-auto ">
          <ul className="flex flex-wrap gap-6">
            {[
              "Overview",
              "Resources",
              "Deploy",
              "Metrics",
              "Activity",
              "Access",
            ].map((tab) => (
              <li
                key={tab}
                className="py-4 relative cursor-pointer"
                onClick={() => handleTabClick(tab)}>
                {tab}
                <div
                  className={`absolute w-full h-[2px] bg-black ${
                    selectedTab === tab ? "" : "hidden"
                  }`}></div>
              </li>
            ))}
          </ul>
        </div>
        <main className=" mx-auto p-8 lg:p-16">
          <div className="grid grid-cols-1 gap-8">
            <div className="h-72 border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center text-gray-400">
              Product List
            </div>
            <div className="h-72 border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center text-gray-400">
              Product List
            </div>
          </div>
        </main>
      </section>
      );
    </>
  );
}

export default AppShell;
