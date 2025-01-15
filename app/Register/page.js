"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function Register() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onRegister = async () => {
    if (user.password !== user.confirmPassword) {
      toast.error("Password and Confirm Password should be same");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("/api/users/register", user);
      toast.success("Register Successful");
      router.push("/Login");
    } catch (error) {
      toast.error("signup failed, " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.userName.length > 0 &&
      user.confirmPassword.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

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
      <section>
        <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-xl rounded-md bg-gray-100 px-8 py-12 text-center">
            <h2 className="text-3xl mx-auto text-center font-bold max-w-sm md:text-5xl">
              Join Quizard today
            </h2>
            <p className="mx-auto my-5 max-w-md text-sm text-gray-500 sm:text-base lg:mb-8">
              Create an account to start learning and sharing knowledge with the
              Quizard community.
            </p>
            <div className="mx-auto w-full max-w-sm">
              <button
                href="#"
                className="flex w-full max-w-full justify-center rounded-md bg-black py-3 text-white">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947090e6cf87_GoogleLogo.svg"
                  alt=""
                  className="mr-4 inline-block"
                />
                SignUp with Google
              </button>
              <div className="mb-14 mt-14 flex w-full justify-around">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg"
                  alt=""
                  className="inline-block"
                />
                <p className="text-sm text-gray-500">or sign up with email</p>
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg"
                  alt=""
                  className="inline-block"
                />
              </div>
              <div className="mx-auto mb-4 max-w-sm pb-4">
                <form name="wf-form-password" method="get">
                  <div className="relative">
                    <input
                      type="text"
                      className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-6 text-sm text-black placeholder:text-black"
                      placeholder="Full Name"
                      required=""
                      value={user.userName}
                      onChange={(e) =>
                        setUser({ ...user, userName: e.target.value })
                      }
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-6 text-sm text-black placeholder:text-black"
                      placeholder="Email Address"
                      required=""
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="password"
                      className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-6 text-sm text-black placeholder:text-black"
                      placeholder="Password (min 8 characters)"
                      required=""
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="password"
                      className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-6 text-sm text-black placeholder:text-black"
                      placeholder="Confirm Password"
                      required=""
                      value={user.confirmPassword}
                      onChange={(e) =>
                        setUser({ ...user, confirmPassword: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="button"
                    className={`mt-4 inline-block w-full  items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white ${
                      buttonDisabled || loading
                        ? "opacity-50  cursor-not-allowed"
                        : "cursor-pointer hover:bg-zinc-800 hover:scale-[101%] transition-all ease-in-out duration-300"
                    }`}
                    onClick={onRegister}
                    disabled={buttonDisabled || loading}>
                    {loading ? "Processing..." : "Sign Up"}
                  </button>
                </form>
              </div>
              <p className="text-sm text-gray-500">
                Already have an account?
                <Link href="/Login" className="font-bold hover:text-black">
                  <span> </span> Login now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
