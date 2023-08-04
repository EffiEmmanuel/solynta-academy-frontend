import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StudentStepThreeFormSchema from "./validation";
import { useFormik } from "formik";

function StudentStepThreeForm({
  firstName,
  lastName,
  email,
  age,
  password,
  setFirstName,
  setLastName,
  setEmailAddress,
  setAge,
  setPassword,
  onSubmit,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useNavigate();

  // Terms agreement state
  const [agreeToTerms, setAgreeToTerms] = useState();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: StudentStepThreeFormSchema,
    onSubmit,
  });

  return (
    <form className="flex flex-col gap-y-10 mt-10">
      <div className="flex lg:flex-row flex-col items-center justify-between gap-x-6">
        <div className="w-full relative my-2">
          <label
            htmlFor="firstName"
            className="text-sm absolute left-0 text-solyntaBlue font-semibold"
          >
            First Name:
          </label>
          <input
            className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
            id="firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />

          <p className="text-left mt-3 text-xs"></p>
        </div>

        <div className="w-full relative my-2">
          <label
            htmlFor="lastName"
            className="text-sm absolute left-0 text-solyntaBlue font-semibold"
          >
            Last Name:
          </label>
          <input
            className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
            id="lastName"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />

          <p className="text-left mt-3 text-xs"></p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-6 lg:flex-row flex-col">
        <div className="w-full relative my-2">
          <label
            htmlFor="email"
            className="text-sm absolute left-0 text-solyntaBlue font-semibold"
          >
            Email Address
          </label>
          <input
            className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="Email Address"
          />

          <p className="text-left mt-3 text-xs"></p>
        </div>

        <div className="w-full relative my-2">
          <label
            htmlFor="age"
            className="text-sm absolute left-0 text-solyntaBlue font-semibold"
          >
            Age
          </label>
          <input
            className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
            id="age"
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />

          <p className="text-left mt-3 text-xs"></p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-6 lg:flex-row flex-col">
        <div className="w-full relative my-2">
          <label
            htmlFor="password"
            className="text-sm absolute left-0 text-solyntaBlue font-semibold"
          >
            Password
          </label>
          <input
            className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />

          <p className="text-left mt-3 text-xs"></p>
        </div>

        <div className="w-full relative my-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm absolute left-0 text-solyntaBlue font-semibold"
          >
            Confirm Password
          </label>
          <input
            className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="********"
          />

          <p className="text-left mt-3 text-xs"></p>
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <input
          type="checkbox"
          name="agreeToTerms"
          value={agreeToTerms}
          onChange={(e) => setAgreeToTerms(e.target.value)}
        />

        <p>
          Agree to{" "}
          <Link
            to="/terms-and-conditions"
            className="underline underline-offset-3"
          >
            Terms & Conditions
          </Link>
        </p>
      </div>
    </form>
  );
}

export default StudentStepThreeForm;
