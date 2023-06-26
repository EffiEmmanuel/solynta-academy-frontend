import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherStepTwoFormSchema from "./validation";
import { useFormik } from "formik";

function TeacherStepTwoForm() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useNavigate();

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    // TO-DO: Send API request to server
    await axios
      .post("", {
        higherEducation: values.higherEducation,
        subjectSpecialism: values.subjectSpecialism,
        experienceSince: values.experienceSince,
      })
      .then((res) => {})
      .catch((err) => {});
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      higherEducation: "",
      subjectSpecialism: "",
      experienceSince: "",
    },
    validationSchema: TeacherStepTwoFormSchema,
    onSubmit,
  });

  return (
    <form className="flex flex-col gap-y-10 mt-10">
      <div className="w-full relative my-2">
        <label htmlFor="higherEducation" className="text-sm absolute left-0">
          Higher Education Qualification
        </label>
        <input
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="higherEducation"
          type="text"
          name="higherEducation"
          value={values.higherEducation}
          onChange={handleChange}
          placeholder="Higher Education Qualification"
        />

        <p className="text-left mt-3 text-xs">
          {errors.higherEducation ? errors.higherEducation : ""}
        </p>
      </div>
      <div className="w-full relative my-2">
        <label htmlFor="subjectSpecialism" className="text-sm absolute left-0">
          Subject Specialism
        </label>
        <input
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="subjectSpecialism"
          type="text"
          name="subjectSpecialism"
          value={values.subjectSpecialism}
          onChange={handleChange}
          placeholder="Subject Specialism"
        />

        <p className="text-left mt-3 text-xs">
          {errors.subjectSpecialism ? errors.subjectSpecialism : ""}
        </p>
      </div>
      <div className="w-full relative my-2">
        <label htmlFor="experienceSince" className="text-sm absolute left-0">
          Experience since
        </label>
        <input
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="experienceSince"
          type="text"
          name="experienceSince"
          value={values.experienceSince}
          onChange={handleChange}
          placeholder="Experience since"
        />

        <p className="text-left mt-3 text-xs">
          {errors.experienceSince ? errors.experienceSince : ""}
        </p>
      </div>
    </form>
  );
}

export default TeacherStepTwoForm;
