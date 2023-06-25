import axios from "axios";
import { useFormik } from "formik";
import Link, { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactFormSchema from "./validation";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useNavigate();

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    // TO-DO: Send API request to server
    await axios
      .post("", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        message: values.message,
      })
      .then((res) => {})
      .catch((err) => {});
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactFormSchema,
    onSubmit,
  });

  return (
    <form className="" onSubmit={handleSubmit}>
      <ToastContainer />
      <div className="">
        <div className="flex flex-col justify-between gap-x-20 align-middle w-full">
          <div className="flex items-center justify-between gap-x-6">
            <div className="w-full relative my-2">
              <label
                htmlFor="firstName"
                className="text-sm absolute left-0"
              >
                First Name:
              </label>
              <input
                className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#3F6FBB]"
                id="firstName"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />

              <p className="text-left mt-3 text-xs">
                {errors.firstName ? errors.firstName : ""}
              </p>
            </div>

            <div className="w-full relative my-2">
              <label
                htmlFor="lastName"
                className="text-sm absolute left-0"
              >
                Last Name:
              </label>
              <input
                className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#3F6FBB]"
                id="lastName"
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />

              <p className="text-left mt-3 text-xs">
                {errors.lastName ? errors.lastName : ""}
              </p>
            </div>
          </div>

          <div className="w-full relative my-2">
            <label
              htmlFor="email"
              className="text-sm absolute left-0"
            >
              Email Address:
            </label>
            <input
              className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#3F6FBB]"
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
              htmlFor="phone"
              className="text-sm absolute left-0"
            >
              Phone Number:
            </label>
            <input
              className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#3F6FBB]"
              id="phone"
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Phone number"
            />

            <p className="text-left mt-3 text-xs">
              {errors.phone ? errors.phone : ""}
            </p>
          </div>

          <div className="w-full relative my-2">
            <label
              htmlFor="message"
              className="text-sm absolute left-0"
            >
              Message:
            </label>
            <textarea
              className="w-full h-16 bg-cosretBlue-300 px-8 text-black text-sm mt-7 focus:outline-none border-[0.5px] border-[#3F6FBB]"
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <p className="text-left mt-3 text-xs">
              {errors.message ? errors.message : ""}
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center lg:mt-10 mt-10">
          <button
            type="submit"
            className="bg-solyntaBlue text-white h-16 w-1/2 px-8 text-sm hover:bg-gray-700 hover:border-black"
          >
            {isLoading ? (
              <FaSpinner className="text-white animate-spin my-auto mx-auto text-center text-lg" />
            ) : (
              "Send"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
