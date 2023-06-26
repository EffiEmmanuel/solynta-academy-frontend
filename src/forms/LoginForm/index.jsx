import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormSchema from "./validation";
import { useFormik } from "formik";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useNavigate();

  // Remember me - state
  const [rememberMe, setRememberMe] = useState();

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    // TO-DO: Send API request to server
    await axios
      .post("", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {})
      .catch((err) => {});
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormSchema,
    onSubmit,
  });

  return (
    <form className="flex flex-col gap-y-10 mt-10">
      <div className="w-full relative my-2">
        <label
          htmlFor="email"
          className="text-sm absolute left-0 text-solyntaYellow font-semibold"
        >
          Email Address
        </label>
        <input
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email Address"
        />

        <p className="text-left mt-3 text-xs">
          {errors.email ? errors.email : ""}
        </p>
      </div>
      <div className="w-full relative my-2">
        <label
          htmlFor="password"
          className="text-sm absolute left-0 text-solyntaYellow font-semibold"
        >
          Password
        </label>
        <input
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="********"
        />

        <p className="text-left mt-3 text-xs">
          {errors.password ? errors.password : ""}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex justify-between items-center">
        <button
          className="h-12 px-7 py-2 w-32 rounded-lg border-[0.5px] border-[#FFD60C] text-solyntaYellow"
          onClick={() => {}}
        >
          Back
        </button>
        <button
          className="h-12 px-7 py-2 w-32 rounded-lg bg-solyntaYellow text-black"
          onClick={() => {}}
        >
          Log in
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            name="rememberMe"
            value={rememberMe}
            className="text-solyntaYellow bg-solyntaYellow"
            onChange={(e) => setRememberMe(e.target.value)}
          />

          <p>Remember Me</p>
        </div>

        <Link to="/auth/signup" className="text-black font-semibold">
          Forgot Password?
        </Link>
      </div>
      {/* Already have an account? */}
      <p className="text-center mt-10">
        Don't have an account?{" "}
        <Link to="/auth/signup" className="text-solyntaYellow font-semibold">
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
