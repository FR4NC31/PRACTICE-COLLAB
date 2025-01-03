import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CiLight, CiDark } from "react-icons/ci";

function Login() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement; // Get the root <html> element
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]); // Update the class whenever darkMode changes

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div>
      <main className="flex justify-center items-center min-h-screen bg-neutral-100 dark:bg-neutral-800 bg-cover">
        <div className="box-content w-full max-w-md p-4 bg-neutral-100 dark:bg-neutral-600 rounded-2xl shadow-2xl border-2 border-black">
          {/* Login Form */}
          <h1
            className="text-4xl font-bold text-center dark:text-white mt-10 cursor-pointer"
            onClick={() => navigate("/adminDashboard")}
          >
            Login
          </h1>
          {/* Login Inputs */}
          <div className="flex flex-col items-center mt-5">
            <input
              type="text"
              placeholder="Username"
              className="mt-5 p-2 rounded-2xl w-4/5 border-2 border-black"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-5 p-2 rounded-2xl w-4/5 border-2 border-black"
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 w-3/5 mt-10 mx-auto block rounded-full"
            onClick={() => navigate("/dashboard")}
          >
            Login
          </button>
          <p className="text-center mt-5 dark:text-white">
            Don't have an account?{" "}
            <button
              className="bg-transparent text-blue-500 text-lg font-bold mt-2 underline"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </p>
        </div>
        <button
          className="absolute w-12 h-12 bottom-16 right-16 bg-neutral-800 dark:bg-white rounded-full text-white dark:text-black font-semibold p-3 text-2xl"
          onClick={toggleDarkMode}
        >
          {darkMode ? <CiLight /> : <CiDark />}
        </button>
      </main>
    </div>
  );
}

export default Login;
