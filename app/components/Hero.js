import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <header>
        {/* Hero Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10 md:py-20">
          {/* Component */}
          <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="flex flex-col">
              {/* Hero Title */}
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Welcome to Quizard: Test Your Knowledge!
              </h1>
              <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
                Challenge yourself with our fun and interactive quizzes. Improve
                your knowledge across various topics and become a Quizard
                master!
              </p>
              {/* Hero Button */}
              <Link
                href="/Register"
                className="hover:bg-zinc-800 hover:scale-[101%] transition-all ease-in-out duration-300 mb-6 mr-6 w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mb-10 lg:mb-12 lg:mr-8">
                Join Now
              </Link>
              {/* Hero Comment */}
              <div className="max-w-xs">
                <p className="mb-4 text-sm text-gray-500">
                  "Quizard is the best platform for testing your knowledge. I
                  love the variety of quizzes available and the user-friendly
                  interface."
                </p>
                <div className="flex items-center gap-11 sm:flex-row">
                  <div className="flex items-center">
                    <img
                      src="https://cdn-icons-png.freepik.com/512/180/180693.png"
                      alt=""
                      className="mr-2 inline-block rounded-full object-cover h-7 w-7 sm:h-7"
                    />
                    <p className="text-sm font-bold">Abdullah</p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-2 text-sm font-bold">5/5</p>
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                      alt=""
                      className="mr-1.5 inline-block w-4"
                    />
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                      alt=""
                      className="mr-1.5 inline-block w-4"
                    />
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                      alt=""
                      className="mr-1.5 inline-block w-4"
                    />
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                      alt=""
                      className="mr-1.5 inline-block w-4"
                    />
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                      alt=""
                      className="mr-1.5 inline-block w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Hero Image */}
            <img
              src="/Assets/HeroBG.jpg"
              alt=""
              className="inline-block h-full w-full max-w-2xl"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
