"use client";

import Hero from "./components/Hero";
import Features from "./components/Features";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AuthProvider } from "../context/AuthContext";

export default function Home() {
  return (
    <>
      <AuthProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" className="bg-white" />
        </Head>
        <Toaster />
        <Hero />
        <Features />
      </AuthProvider>
    </>
  );
}
