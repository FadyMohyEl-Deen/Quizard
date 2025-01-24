import React from "react";
import SideBar from "../components/SideBar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

function page() {
  return (
    <>
      <SideBar>
          <h1 className="font-bold text-xl">Welcome Back, Fady</h1>
          <Stats />
      </SideBar>
    </>
  );
}

export default page;
