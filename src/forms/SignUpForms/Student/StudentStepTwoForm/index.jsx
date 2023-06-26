import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentStepTwoFormSchema from "./validation";
import { useFormik } from "formik";

function StudentStepTwoForm() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useNavigate();

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    // TO-DO: Send API request to server
    await axios
      .post("", {
        academicYear: values.academicYear,
      })
      .then((res) => {})
      .catch((err) => {});
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      academicYear: "",
    },
    validationSchema: StudentStepTwoFormSchema,
    onSubmit,
  });

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
          value={values.academicYear}
          onChange={handleChange}
          placeholder="Academic Year"
        />

        <p className="text-left mt-3 text-xs">
          {errors.academicYear ? errors.academicYear : ""}
        </p>
      </div>
    </form>
  );
}

export default StudentStepTwoForm;
