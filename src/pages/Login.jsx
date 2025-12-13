import React, { useState } from "react";

export const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const togglePassword = () => {
    const passInput = document.getElementById("password");
    passInput.type = passInput.type === "password" ? "text" : "password";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (isSignup) {
      // SIGN UP
      localStorage.setItem(
        "shoplee-user",
        JSON.stringify({ email, password })
      );
      alert("Signup successful! Now login 👋");
      setIsSignup(false);
    } else {
      // LOGIN
      const storedUser = JSON.parse(localStorage.getItem("shoplee-user"));

      if (
        storedUser?.email === email &&
        storedUser?.password === password
      ) {
        alert("Login successful 🎉");
      } else {
        alert("Invalid email or password ❌");
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-800 to-blue-900 flex flex-col items-center justify-center p-6" style={{backgroundImage:
            "url('https://img.freepik.com/premium-vector/geometric-gradient-technology-background_23-2149110132.jpg?semt=ais_hybrid&w=740&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",}}  >
      <div className="animate-slowPopup w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 animate-fade-in">
        
        <h2 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-md">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        <form className="space-y-8" onSubmit={handleSubmit}>
          
          
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 text-white bg-transparent border border-gray-400 rounded-md
                         peer focus:border-blue-400 focus:outline-none 
                         placeholder-transparent transition-all"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-300 transition-all duration-200
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                         peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400
                         bg-blue-900 px-1"
            >
              Email
            </label>
          </div>

          
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full px-4 py-3 text-white bg-transparent border border-gray-400 rounded-md
                         peer focus:border-blue-800 focus:outline-none 
                         placeholder-transparent transition-all"
            />

            <label
              htmlFor="password"
              className="absolute left-4 top-3 text-gray-300 transition-all duration-200
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                         peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400
                         bg-blue-900 px-1"
            >
              Password
            </label>

            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-3 text-gray-300 hover:text-white transition-all"
            >
              show
            </button>
          </div>

          
          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-lg
                       bg-blue-500 hover:bg-blue-600 active:bg-blue-700
                       transition-all shadow-lg hover:shadow-blue-500/40"
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        
        <p className="mt-6 text-center text-gray-300">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-400 hover:underline font-semibold"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>

      <footer className="py-10 text-center text-gray-300 mt-5">
        © 2025 Shop Lee. All Rights Reserved.
      </footer>
    </div>
  );
};
