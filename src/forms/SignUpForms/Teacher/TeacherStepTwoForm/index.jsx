import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherStepTwoFormSchema from "./validation";
import { useFormik } from "formik";

function TeacherStepTwoForm({
  higherEducation,
  setHigherEducation,
  subjectSpecialism,
  setSubjectSpecialism,
  experienceSince,
  setExperienceSince,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useNavigate();

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    // TO-DO: Send API request to server
    await axios
      .post("", {
        higherEducation: higherEducation,
        subjectSpecialism: subjectSpecialism,
        experienceSince: experienceSince,
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
        <label
          htmlFor="higherEducation"
          className="text-sm absolute left-0 text-solyntaBlue font-semibold"
        >
          Higher Education Qualification
        </label>
        <input
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="higherEducation"
          type="text"
          name="higherEducation"
          value={higherEducation}
          onChange={(e) => setHigherEducation(e.target.value)}
          placeholder="Higher Education Qualification"
        />

        <p className="text-left mt-3 text-xs"></p>
      </div>
      <div className="w-full relative my-2">
        <label
          htmlFor="subjectSpecialism"
          className="text-sm absolute left-0 text-solyntaBlue font-semibold"
        >
          Subject Specialism
        </label>
        <input
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="subjectSpecialism"
          type="text"
          name="subjectSpecialism"
          value={subjectSpecialism}
          onChange={(e) => setSubjectSpecialism(e.target.value)}
          placeholder="Subject Specialism"
        />

        <p className="text-left mt-3 text-xs"></p>
      </div>
      <div className="w-full relative my-2">
        <label
          htmlFor="experienceSince"
          className="text-sm absolute left-0 text-solyntaBlue font-semibold"
        >
          Experience since
        </label>
        <input
          className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] rounded-lg bg-white shadow-md"
          id="experienceSince"
          type="text"
          name="experienceSince"
          value={experienceSince}
          onChange={(e) => setExperienceSince(e.target.value)}
          placeholder="Experience since"
        />

        <p className="text-left mt-3 text-xs"></p>
      </div>
    </form>
  );
}

export default TeacherStepTwoForm;
