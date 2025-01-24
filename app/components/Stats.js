import React from "react";
import { ImListNumbered } from "react-icons/im";

function Stats() {
  return (
    <div>
      <div className="flex justify-center items-start min-h-screen bg-gray-100 p-5 md:p-10">
        <div className="sm:w-[65%]">
          <div className="flex flex-col lg:flex-row w-full gap-4 rounded-lg">
            <div className=" p-8 w-full bg-zinc-800 rounded-lg ">
              <div className="flex flex-col">
                <p className="text-white mb-3 md:mb-6">Enrolled Courses</p>
                <p className="text-white font-semibold text-xl md:text-3xl">
                  4
                </p>
              </div>
            </div>
            <div className=" p-8 w-full bg-zinc-800 rounded-lg ">
              <div className="flex flex-col">
                <p className="text-white mb-3 md:mb-6">Avg. Score</p>
                <p className="text-white font-semibold text-xl md:text-3xl">
                  78.16%
                </p>
              </div>
            </div>
            <div className=" p-8 w-full bg-zinc-800 rounded-lg ">
              <div className="flex flex-col">
                <p className="text-white mb-3 md:mb-6">Study Time</p>
                <p className="text-white font-semibold text-xl md:text-3xl">
                  24h 32m
                </p>
              </div>
            </div>
            <div className=" p-8 w-full bg-zinc-800 rounded-lg ">
              <div className="flex flex-col">
                <p className="text-white mb-3 md:mb-6">Upcoming Quizes</p>
                <p className="text-white font-semibold text-xl md:text-3xl">
                  3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
