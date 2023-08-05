import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormSchema from "./validation";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useNavigate();

  const [role, setRole] = useState("student");

  // Remember me - state
  const [rememberMe, setRememberMe] = useState();
  console.log("URL:", process.env.REACT_APP_API_URL);

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    // TO-DO: Send API request to server
    if (role === "student") {
      await axios
        .post("http://localhost:3001/student/login", {
          emailAddress: values.email,
          password: values.password,
        })
        .then(async (res) => {
          console.log("response:", res);
          toast("Logged in successfully!", "success");
          localStorage.setItem("token", res.data.Data);
          localStorage.setItem("student", JSON.stringify(res.data.student));
          setTimeout(() => {
            Router("/student/dashboard");
          }, 1500);
        })
        .catch((err) => {
          toast(err?.response?.data?.message, "error");
        });
    } else if (role === "teacher") {
      await axios
        .post("http://localhost:3001/teacher/login", {
          emailAddress: values.email,
          password: values.password,
        })
        .then(async (res) => {
          console.log("response:", res);
          toast("Logged in successfully!", "success");
          localStorage.setItem("token", res.data.Data);
          localStorage.setItem("teacher", JSON.stringify(res.data.teacher));
          setTimeout(() => {
            Router("/teacher/dashboard");
          }, 1500);
        })
        .catch((err) => {
          console.log("ERROR:", err);
          toast(err?.response?.data?.message, "error");
        });
    } else {
      await axios
        .post("http://localhost:3001/parent/login", {
          emailAddress: values.email,
          password: values.password,
        })
        .then(async (res) => {
          console.log("response:", res);
          toast("Logged in successfully!", "success");
          localStorage.setItem("token", res.data.Data);
          localStorage.setItem("parent", JSON.stringify(res.data.parent));
          setTimeout(() => {
            Router("/parent/dashboard");
          }, 1500);
        })
        .catch((err) => {
          toast(err?.response?.data?.message, "error");
        });
    }
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
    <form className="flex flex-col gap-y-10 mt-10" onSubmit={handleSubmit}>
      <ToastContainer />
      <div className="w-full relative my-2">
        <label
          htmlFor="email"
          className="text-sm absolute left-0 text-solyntaYellow font-semibold"
        >
          Role
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
        >
          <option value="student">Student</option>
          <option value="parent">Parent</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>
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
          type="submit"
          className="h-12 px-7 py-2 w-32 rounded-lg bg-solyntaYellow text-black"
          // onClick={() => {}}
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
