"use client";
import React from "react";
import Link from "next/link";

function NavBar() {
  const [open, setOpen] = React.useState(false);

  const onOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="bg-zinc-100 px-2">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-10">
            <a className="block text-teal-600" href="/">
              <img className="w-15 h-10" src="/Assets/Logo.png" alt="" />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="Services">
                    {" "}
                    Services{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="AboutUs">
                    About Us{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="ContactUs">
                    Contact Us{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-black hover:bg-zinc-700 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="Login">
                Login
              </Link>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-black-100 px-5 py-2.5 text-sm font-medium text-black"
                  href="Register">
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-black-100 p-2 text-black-600 transition hover:text-gray-500/75"
                onClick={onOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="black"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {open && (
          <nav aria-label="">
            <hr className="mb-3" />
            <ul className="pb-3 flex flex-col items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-black-500 transition hover:text-gray-500/75"
                  href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-black-500 transition hover:text-gray-500/75"
                  href="Services">
                  {" "}
                  Services{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-black-500 transition hover:text-gray-500/75"
                  href="AboutUs">
                  About Us{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-black-500 transition hover:text-gray-500/75"
                  href="ContactUs">
                  Contact Us{" "}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default NavBar;
