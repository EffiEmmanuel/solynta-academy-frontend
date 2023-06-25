import React from "react";
import solyntaLogo from "../../../assets/logos/solynta-logo.png";

function SignUpPage() {
  return (
    <div className="py-10 lg:px-20 px-10">
      <div className="mx-auto text-center flex flex-col items-center">
        {/* Logo */}
        <img src={solyntaLogo} alt="Solynta Academy" className="w-[80px]" />

        {/* Heading */}
        <h1 className="mt-3 text-3xl font-bold">
          Welcome ! Start Exploring: Sign Up Now
        </h1>
        
        {/* Subtitle */}
        <p className="mt-4 text-sm lg:max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur
          ante non sapien pulvinar porttitor. Nam in hendrerit sapien. Nam sem
          erat, vulputate et .{" "}
        </p>
      </div>
      {/* Form */}
      {/* Action buttons */}
      {/* Already have an account? */}
    </div>
  );
}

export default SignUpPage;
