import Hero from "./components/Hero";
import Features from "./components/Features";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" className="bg-white" />
      </Head>
      <Toaster />
      <Hero />
      <Features />
    </>
  );
}
