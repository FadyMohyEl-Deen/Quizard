import Hero from "./components/Hero";
import Features from "./components/Features";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster  />
      <Hero />
      <Features />
    </>
  );
}
