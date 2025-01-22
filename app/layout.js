import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AuthProvider } from "../context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quizard",
  description:
    "Quizard offers a range of features to enhance your quiz experience.",
  image: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <AuthProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <div className="px-0">{children}</div>
          </body>
        </AuthProvider>
      </html>
    </>
  );
}
