import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="block bg-zinc-100 px-7 rounded-md">
        <div className="py-10 md:py-20 mx-auto w-full max-w-7xl">
          <div className="sm:flex-row flex justify-between flex-col">
            <h2 className="font-bold text-3xl md:text-5xl w-full max-w-xl">
              Join Quizard and test your knowledge now!
            </h2>
            <div className="mt-8 md:mt-0">
              <div className="mb-4 flex max-w-72 items-start justify-start">
                <Image
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bb99e6cf78_MapPin.svg"
                  alt=""
                  className="inline-block mr-3 mt-1"
                  width={25}
                  height={25}
                />
                <p className="text-gray-500 text-sm sm:text-base">
                  8502 Preston Rd. Inglewood, Maine 98380, USA
                </p>
              </div>
              <div className="mb-4 flex max-w-72 items-start justify-start">
                <Image
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944119e6cf76_EnvelopeSimple-2.svg"
                  alt=""
                  className="inline-block mr-3"
                  width={25}
                  height={25}
                />
                <p className="text-gray-500 text-sm sm:text-base">
                  support@Quizard.co
                </p>
              </div>
            </div>
          </div>
          <div className="mb-14 w-full border-b border-black mt-16"></div>
          <div className="md:flex-row flex justify-between sm:items-center sm:flex-col items-center pl-8 md:pl-0">
            <div className="font-semibold mb-4 sm:mb-0 py-1 text-center sm:text-center">
              <Link
                href="#"
                className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
                Home
              </Link>
              <Link
                href="#"
                className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
                Services
              </Link>
              <Link
                href="#"
                className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
                About Us
              </Link>
              <Link
                href="#"
                className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
                Contact Us
              </Link>
              <Link
                href="#"
                className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
                Careers
              </Link>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm sm:text-base text-center sm:text-center pb-4">
          © 2021 Quizard.co. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
