import React, { useRef } from "react";
import solyntaLogo from "../../../assets/logos/solynta-logo.png";
import { useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { Link, Router, redirect, useNavigate } from "react-router-dom";
import TeacherStepTwoForm from "../../../forms/SignUpForms/Teacher/TeacherStepTwoForm";
import TeacherStepThreeForm from "../../../forms/SignUpForms/Teacher/TeacherStepThreeForm";
import StudentStepTwoForm from "../../../forms/SignUpForms/Student/StudentStepTwoForm";
import StudentStepThreeForm from "../../../forms/SignUpForms/Student/StudentStepThreeForm";
import ParentStepTwoForm from "../../../forms/SignUpForms/Parent/ParentStepTwoForm";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpPage() {
  const navigate = useNavigate();
  const stepsAndPages = [{ 1: {} }];

  const [isLoading, setIsLoading] = useState(false);

  const [isStepOne, setIsStepOne] = useState(true);
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [isParentStepTwo, setIsParentStepTwo] = useState(false);
  const [isStepThree, setIsStepThree] = useState(false);

  // Progress states
  const [isProgreeStepOne, setIsProgreeStepOne] = useState(true);
  const [isProgreeStepTwo, setIsProgreeStepTwo] = useState(false);
  const [isProgreeStepThree, setIsProgreeStepThree] = useState(false);

  // Button states
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);

  // Role states
  const [isTeacher, setIsTeacher] = useState(true);
  const [isStudent, setIsStudent] = useState(false);
  const [isParent, setIsParent] = useState(false);

  // Scroll state
  const scrollTop = useRef(null);

  // FORM FIELDS
  const [higherEducation, setHigherEducation] = useState("");
  const [subjectSpecialism, setSubjectSpecialism] = useState("");
  const [experienceSince, setExperienceSince] = useState("");
  const [firstName, setFrstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // STUDENT FORM FIELDS
  const [academicYear, setAcademicYear] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = async (values) => {
    console.log("AALL VALUES", values);
    // TO-DO: Send API request to server
    if (isTeacher) {
      setIsLoading(true);
      await axios
        .post(`http://24.199.107.14:3001/teacher/register`, {
          ...values,
          confirmPassword: password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            toast("Your account was created successfully!", "success");
            setTimeout(() => {
              setIsLoading(false);
              navigate("/auth/login");
            }, 1500);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          toast(err.response?.data?.message, "error");
          console.log(err);
        });
    } else if (isStudent) {
      setIsLoading(true);
      await axios
        .post(`http://24.199.107.14:3001/student/register`, {
          ...values,
          confirmPassword: password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            toast("Your account was created successfully!", "success");
            setTimeout(() => {
              setIsLoading(false);
              navigate("/auth/login");
            }, 1500);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          toast(err.response?.data?.message, "error");
        });
    } else {
      setIsLoading(true);
      await axios
        .post(`http://24.199.107.14:3001/parent/register`, {
          ...values,
          confirmPassword: password,
        })
        .then((res) => {
          if (res.data.success) {
            toast("Your account was created successfully!", "success");
            setTimeout(() => {
              setIsLoading(false);
              navigate("/auth/login");
            }, 1500);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          toast(err.response?.data?.message, "error");
        });
    }
  };
  return (
    <div className="py-10 lg:px-20 px-10 bg-[#F4F6FA]">
      <ToastContainer />
      <div className="mx-auto text-center flex flex-col items-center">
        {/* Logo */}
        <img src={solyntaLogo} alt="Solynta Academy" className="w-[80px]" />

        {/* Heading */}
        <h1 className="mt-3 text-3xl font-bold">
          Welcome ! Start Exploring: Sign Up Now
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm lg:max-w-xl">
          Welcome to our platform, where the journey of educational empowerment
          begins. Join us now and unlock a world of knowledge and growth!
        </p>
      </div>

      {/* Form */}
      <div
        ref={scrollTop}
        className="mt-10 bg-white shadow-lg drop-shadow-md p-10 rounded-xl min-h-screen"
      >
        {/* Steps */}
        <div className="flex flex-row items-center justify-between">
          <h2
            className={`${
              isProgreeStepOne
                ? "bg-solyntaBlue text-white"
                : "bg-gray-100 text-black"
            } h-[50px] w-[50px] min-h-[50px] min-w-[50px] max-h-[50px] p-3 rounded-full flex justify-center items-center`}
          >
            1
          </h2>
          <div
            className={`h-[2px] w-full ${
              isStepTwo ? "bg-solyntaBlue" : "bg-gray-300"
            }`}
          ></div>
          <h2
            className={`${
              isProgreeStepTwo
                ? "bg-solyntaBlue text-white"
                : "bg-gray-100 text-black"
            } h-[50px] w-[50px] min-h-[50px] min-w-[50px] max-h-[50px] p-3 rounded-full flex justify-center items-center`}
          >
            2
          </h2>
          {!isParent && (
            <>
              <div
                className={`h-[2px] w-full ${
                  isStepThree ? "bg-solyntaBlue" : "bg-gray-300"
                }`}
              ></div>
              <h2
                className={`${
                  isProgreeStepThree
                    ? "bg-solyntaBlue text-white"
                    : "bg-gray-100 text-black"
                } h-[50px] w-[50px] min-h-[50px] min-w-[50px] max-h-[50px] p-3 rounded-full flex justify-center items-center`}
              >
                3
              </h2>
            </>
          )}
        </div>

        <hr className="my-10" />

        {/* Step 1 */}
        {isStepOne && (
          <div>
            <div className="text-center">
              <h2 className={`font-bold text-3xl`}>Select Your Role</h2>
              <p className={`mt-3`}>Choose your role to get started.</p>
            </div>
            <form>
              {/* Roles */}
              <div className="flex lg:flex-row flex-col gap-y-10 items-center justify-center lg:gap-x-32 mt-16">
                <button
                  className={`${
                    isTeacher && "border-[0.5px] border-[#3F6FBB]"
                  } rounded-lg h-[90px] flex items-center gap-x-5 w-[250px] p-4 flex-row justify-center shadow-lg`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsTeacher(true);
                    setIsStudent(false);
                    setIsParent(false);
                  }}
                >
                  <div className="h-14 w-14 bg-[#CCDDF8] rounded-full flex justify-center items-center">
                    <FaChalkboardTeacher
                      size={28}
                      className={`text-solyntaBlue`}
                    />
                  </div>
                  <p>Teacher</p>
                </button>
                <button
                  className={`${
                    isStudent && "border-[0.5px] border-[#3F6FBB]"
                  } rounded-lg h-[90px] flex items-center gap-x-5 w-[250px] p-4 flex-row justify-center shadow-lg`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsTeacher(false);
                    setIsStudent(true);
                    setIsParent(false);
                  }}
                >
                  <div className="h-14 w-14 bg-[#CCDDF8] rounded-full flex justify-center items-center">
                    <PiStudent size={28} className={`text-solyntaBlue`} />
                  </div>
                  <p>Student</p>
                </button>
                <button
                  className={`${
                    isParent && "border-[0.5px] border-[#3F6FBB]"
                  } rounded-lg h-[90px] flex items-center gap-x-5 w-[250px] p-4 flex-row justify-center shadow-lg`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsTeacher(false);
                    setIsStudent(false);
                    setIsParent(true);
                  }}
                >
                  <div className="h-14 w-14 bg-[#CCDDF8] rounded-full flex justify-center items-center">
                    <RiParentFill size={28} className={`text-solyntaBlue`} />
                  </div>
                  <p>Parent</p>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TEACHERS */}
        {/* Step 2 - Teacher */}
        {isStepTwo && isTeacher && (
          <div>
            <div className="text-center">
              <h2 className={`font-bold text-3xl`}>Teacher Profile</h2>
              <p className={`mt-3`}>Provide your teaching details.</p>
            </div>

            <TeacherStepTwoForm
              higherEducation={higherEducation}
              setHigherEducation={setHigherEducation}
              subjectSpecialism={subjectSpecialism}
              setSubjectSpecialism={setSubjectSpecialism}
              experienceSince={experienceSince}
              setExperienceSince={setExperienceSince}
            />
          </div>
        )}

        {/* Step 3 - Teacher */}
        {isStepThree && isTeacher && (
          <div>
            <div className="text-center">
              <h2 className={`font-bold text-3xl`}>
                Personal Information and Account Setup
              </h2>
              <p className={`mt-3`}>
                Enter your personal information and set up your account.
              </p>
            </div>

            <TeacherStepThreeForm
              firstName={firstName}
              setFirstName={setFrstName}
              lastName={lastName}
              setLastName={setLastName}
              email={emailAddress}
              setEmailAddress={setEmailAddress}
              phone={phone}
              setPhone={setPhone}
              password={password}
              setPassword={setPassword}
              onSubmit={onSubmit}
            />
          </div>
        )}

        {/* STUDENTS */}
        {/* Step 2 - Student */}
        {isStepTwo && isStudent && (
          <div>
            <div className="text-center">
              <h2 className={`font-bold text-3xl`}>Academic Year</h2>
              <p className={`mt-3`}>Provide the academic year you are in</p>
            </div>

            <StudentStepTwoForm
              academicYear={academicYear}
              setAcademicYear={setAcademicYear}
            />
          </div>
        )}

        {/* Step 3 - Student */}
        {isStepThree && isStudent && (
          <div>
            <div className="text-center">
              <h2 className={`font-bold text-3xl`}>
                Personal Information and Account Setup
              </h2>
              <p className={`mt-3`}>
                Enter your personal information and set up your account.
              </p>
            </div>

            <StudentStepThreeForm
              firstName={firstName}
              setFirstName={setFrstName}
              lastName={lastName}
              setLastName={setLastName}
              email={emailAddress}
              setEmailAddress={setEmailAddress}
              age={age}
              setAge={setAge}
              password={password}
              setPassword={setPassword}
              onSubmit={onSubmit}
            />
          </div>
        )}

        {/* PARENTS */}
        {/* Step 2 - Parent */}
        {isStepTwo && isParent && isParentStepTwo && (
          <div>
            <div className="text-center">
              <h2 className={`font-bold text-3xl`}>
                Personal Information and Account Setup
              </h2>
              <p className={`mt-3`}>
                Enter your personal information and set up your account.
              </p>
            </div>

            <ParentStepTwoForm
              firstName={firstName}
              setFirstName={setFrstName}
              lastName={lastName}
              setLastName={setLastName}
              email={emailAddress}
              setEmailAddress={setEmailAddress}
              phone={phone}
              setPhone={setPhone}
              password={password}
              setPassword={setPassword}
              onSubmit={onSubmit}
            />
          </div>
        )}
      </div>
      {/* Action buttons */}
      <div className="flex justify-between items-center my-14">
        <button
          className="h-12 px-7 py-2 w-32 rounded-lg border-[0.5px] border-[#3F6FBB] text-solyntaBlue"
          disabled={isPreviousDisabled}
          onClick={() => {
            if (isStepTwo) {
              setIsStepOne(true);
              if (isParent) setIsParentStepTwo(false);
              setIsStepTwo(false);
              // Update previous button disabled state
              setIsPreviousDisabled(false);
              // Update progress bar
              setIsProgreeStepTwo(false);
              // Scroll up
              scrollTop.current?.scrollIntoView({ behavior: "smooth" });
            } else if (isStepThree) {
              if (isParent) setIsParentStepTwo(true);
              setIsStepTwo(true);
              setIsStepThree(false);
              // Update previous button disabled state
              setIsPreviousDisabled(false);
              // Update progress bar
              setIsProgreeStepThree(false);
              // Scroll up
              scrollTop.current?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Previous
        </button>
        {!isStepThree && !isParentStepTwo && (
          <button
            className="h-12 px-7 py-2 w-32 rounded-lg bg-solyntaBlue text-white"
            onClick={() => {
              if (isStepOne) {
                setIsStepOne(false);
                if (isParent) setIsParentStepTwo(true);
                setIsStepTwo(true);
                // Update previous button disabled state
                setIsPreviousDisabled(false);
                // Update progress bar
                setIsProgreeStepTwo(true);
                // Scroll up
                scrollTop.current?.scrollIntoView({ behavior: "smooth" });
              } else if (isStepTwo) {
                setIsStepTwo(false);
                setIsStepThree(true);
                // Update previous button disabled state
                setIsPreviousDisabled(false);
                // Update progress bar
                setIsProgreeStepThree(true);
                // Scroll up
                scrollTop.current?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Continue
          </button>
        )}

        {(isStepThree || (isStepTwo && isParent)) && (
          <button
            className="h-12 px-7 py-2 w-32 rounded-lg bg-solyntaBlue text-white"
            disabled={isLoading}
            onClick={() => {
              if (isTeacher) {
                onSubmit({
                  higherEducation,
                  subjectSpecialism,
                  experienceSince,
                  firstName,
                  lastName,
                  emailAddress,
                  phone,
                  password,
                });
              } else if (isStudent) {
                onSubmit({
                  academicYear,
                  firstName,
                  lastName,
                  emailAddress,
                  password,
                  age,
                });
              } else {
                onSubmit({
                  firstName,
                  lastName,
                  emailAddress,
                  phone,
                  password,
                });
              }
            }}
          >
            {isLoading ? (
              <Spinner animation="border" size="sm" variant="primary" />
            ) : (
              "Confirm"
            )}
          </button>
        )}
      </div>
      {/* Already have an account? */}
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-solyntaYellow font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignUpPage;
