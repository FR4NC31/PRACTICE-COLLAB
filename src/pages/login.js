import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
      <div className="flex justify-center items-center min-h-screen bg-bannerImg bg-cover">
         <div className="box-content w-full max-w-md p-4 bg-white rounded-2xl shadow-2xl border-2 border-black">
         <h1 className="text-4xl font-bold text-center mt-10">Login</h1>
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
                <p className="text-center mt-5">
                Don't have an account?{" "}
                <button
                    className="bg-transparent text-blue-500 text-lg font-bold mt-2 underline"
                    onClick={() => navigate("/register")}
                    >
                    Register
                </button>
                </p>
            </div>
    </div>
  );
}

export default Login;
