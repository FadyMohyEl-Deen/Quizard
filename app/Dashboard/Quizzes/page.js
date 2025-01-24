import React from "react";
import SideBar from "../../components/SideBar";
import QuizCard from "../../components/QuizCard";
import { IoIosArrowDown } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

export default function page() {
  return (
    <SideBar>
      <div>
        <h1 className="font-bold text-3xl">Available Quizzes</h1>
        <div className="lg:flex gap-2 justify-center items-center mt-4 mb-2">
          <div className="flex gap-2 mb-2 lg:mb-0 ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-zinc-500"
            />
            <button className="lg:px-8 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-600">
              Search
            </button>
          </div>
          <div className=" relative w-full md:w-48">
            <select className="w-full pl-4 text-gray-400 p-2 border border-zinc-200 rounded-md bg-white appearance-none cursor-pointer">
              <option value="all">All Subjects</option>
              <option value="Programming">Software Testing</option>
              <option value="Web Development">Web Development</option>
              <option value="Database">Database</option>
              <option value="DevOps">DevOps</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <IoIosArrowDown size={20} fill="gray" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center border border-gray-200 rounded-lg shadow-sm mb-2">
          <div className="flex flex-col items-center justify-center h-32 px-4">
            <MdErrorOutline size={30} className="text-gray-500 mb-2" />
            <p className="text-gray-500 text-center mt-1">
              No quizzes found! Try adjusting your search or filter.
            </p>
          </div>
        </div>

        <QuizCard />
      </div>
    </SideBar>
  );
}
