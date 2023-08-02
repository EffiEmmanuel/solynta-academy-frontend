import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentStepTwoFormSchema from "./validation";
import { useFormik } from "formik";

function StudentStepTwoForm({ academicYear, setAcademicYear }) {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useNavigate();

  return (
    <form className="flex flex-col gap-y-10 mt-10">
      <div className="w-full relative my-2">
        <label htmlFor="academicYear" className="text-sm absolute left-0 text-solyntaBlue font-semibold">
          Academic Year
        </label>
        <input
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="academicYear"
          type="text"
          name="academicYear"
          value={academicYear}
          onChange={(e) => setAcademicYear(e.target.value)}
          placeholder="Academic Year"
        />
      </div>
    </form>
  );
}

export default StudentStepTwoForm;
