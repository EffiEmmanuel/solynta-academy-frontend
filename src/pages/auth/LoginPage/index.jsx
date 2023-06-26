import React, { useRef } from "react";
import solyntaLogo from "../../../assets/logos/solynta-logo.png";
import LoginForm from "../../../forms/LoginForm";

function LoginPage() {
  return (
    <div className="py-10 lg:px-20 px-10 bg-[#FEFCF1]">
      <div className="mx-auto text-center flex flex-col items-center">
        {/* Logo */}
        <img src={solyntaLogo} alt="Solynta Academy" className="w-[80px]" />

        {/* Heading */}
        <h1 className="mt-3 text-3xl font-bold">
          Welcome Back: Log in and Reconnect with Learning!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm lg:max-w-xl">
          Welcome back! Log in to access your personalized learning experience
          and continue your educational journey with us.
        </p>
      </div>

      {/* Form */}
      <div className="mt-10 bg-white shadow-lg drop-shadow-md p-10 rounded-xl min-h-screen">
        <div>
          <div className="text-center">
            <h2 className={`font-bold text-3xl`}>Select Your Role</h2>
            <p className={`mt-3`}>Choose your role to get started.</p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
