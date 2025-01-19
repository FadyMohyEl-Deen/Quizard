"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Image from "next/image";

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const navBarRef = useRef(null);
  const router = useRouter();
  // const { isLoggedIn, logIn, logOut } = useAuth();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      setLogged(false);
      router.push("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event) => {
    if (navBarRef.current && !navBarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header ref={navBarRef} className="bg-zinc-100 px-3 md:px-[212px]">
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            animation: "slideIn 0.5s, fadeOut 1s",
            background: "#444",
            color: "#fff",
          },
        }}
      />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-10">
            <Link className="block text-teal-600" href="/">
              <Image className="w-15 h-10" src="/Assets/Logo.png" alt="Logo" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="/"
                    onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="Services"
                    onClick={handleLinkClick}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="AboutUs"
                    onClick={handleLinkClick}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="ContactUs"
                    onClick={handleLinkClick}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* login, Register, profile, logout */}

            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-black hover:bg-zinc-700 px-4 py-2 text-sm font-medium text-white shadow"
                href="Login"
                onClick={handleLinkClick}>
                Login
              </Link>
              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-black-100 px-4 py-2 text-sm font-medium text-black hover:text-zinc -700"
                  href="Register">
                  Register
                </Link>
              </div>

              <div className="hidden  sm:flex gap-6 items-center">
                <div className="sm:flex sm:gap-4">
                  <Link href={""}>
                    <FaUserCircle
                      size={30}
                      color=""
                      className="text-zinc-700 hover:text-red-600 duration-300 transition-all ease-in-out"
                    />
                  </Link>
                </div>
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-red-500 hover:bg-red-700 px-4 py-2 text-sm font-medium text-white shadow"
                    href="/"
                    onClick={logout}>
                    Logout
                  </Link>
                </div>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-black-100 p-2 text-black-600 transition hover:text-gray-500/75"
                onClick={toggleMenu}>
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
          <nav aria-label="Mobile Navigation">
            <hr className="mb-3" />
            <ul className="pb-3 flex flex-col items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-black-500 transition hover:text-gray-500/75"
                  href="/"
                  onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-black-500 transition hover:text-gray-500/75"
                  href="Services"
                  onClick={handleLinkClick}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-black-500 transition hover:text-gray-500/75"
                  href="AboutUs"
                  onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-black-500 transition hover:text-gray-500/75"
                  href="ContactUs"
                  onClick={handleLinkClick}>
                  Contact Us
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
