"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

function NavBar() {
  const [open, setOpen] = useState(false);
  const navBarRef = useRef(null);
  const router = useRouter();

  const logout = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/");
    } catch (error) {
      console.log(error.message || "An error occurred");
      toast.error(error.message || "Logout failed. Try again.");
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
    <>
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
      <div className="mx-auto max-w-screen-xl" ref={navBarRef}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="md:flex md:items-center md:gap-10">
            <Link className="block text-teal-600" href="/">
              <Image
                className="w-15 h-10"
                src="/Assets/Logo.png"
                alt="Logo"
                width={60}
                height={10}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-700"
                    href="/"
                    onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-700"
                    href="Services"
                    onClick={handleLinkClick}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-700"
                    href="AboutUs"
                    onClick={handleLinkClick}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-700"
                    href="ContactUs"
                    onClick={handleLinkClick}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* <div className="hidden sm:flex gap-6 items-center">
                <Link href="#">
                  <FaUserCircle
                    size={30}
                    className="text-zinc-700 hover:text-red-600 transition duration-300"
                  />
                </Link>
                <Link
                  className="rounded-md bg-red-500 hover:bg-red-700 px-4 py-2 text-sm font-medium text-white shadow"
                  href="/"
                  onClick={logout}>
                  Logout
                </Link>
              </div> */}
            <div className="flex sm:gap-4">
              <Link
                className="ml-40 rounded-md bg-black hover:bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow"
                href="Login"
                onClick={handleLinkClick}>
                Login
              </Link>
              <Link
                className="hidden md:flex rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-black hover:text-gray-700"
                href="Register">
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="block md:hidden">
            <button
              aria-label="Toggle Navigation Menu"
              className="rounded bg-gray-100 p-2 text-black transition hover:text-gray-700"
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

        {/* Mobile Navigation */}
        {open && (
          <nav
            aria-label="Mobile Navigation"
            className="bg-zinc-100 rounded-md">
            <ul className="flex flex-col items-center gap-6 text-sm py-4">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-700"
                  href="/"
                  onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-700"
                  href="Services"
                  onClick={handleLinkClick}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-700"
                  href="AboutUs"
                  onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-700"
                  href="ContactUs"
                  onClick={handleLinkClick}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-700"
                  href="#">
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-md bg-red-500 hover:bg-red-700 px-4 py-2 text-sm font-medium text-white shadow"
                  href="/"
                  onClick={logout}>
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

export default NavBar;
