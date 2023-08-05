import { createContext, useEffect, useState } from "react";

import DahboardTopBar from "./DashboardTopBar";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import DashboardNavbar from "./DashboardNavbar";
import { useNavigate } from "react-router-dom";

// Creating a user context to manage state
export const UserContext = createContext();

function StudentDashboard(props) {
  const [user, setUser] = useState();
  const [classes, setClasses] = useState();
  const [absences, setAbsences] = useState();
  const [courses, setCourses] = useState();
  const [lessons, setLessons] = useState();

  //   Current page
  const [currentPage, setCurrectPage] = useState("home");

  function setTheCurrentPage(page) {
    setCurrectPage(page);
  }

  //   Protect page
  const Router = useNavigate();
  const [loading, setIsLoading] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    async function validateSession() {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("student"));
      if (!token) {
        Router("/login");
        //   setIsLoading(false);
        return toast.error("You must be logged in.");
      }

      if (user) {
        console.log("userrr:", user);
        setUser(user);
      }

      // await axios
      //   .post(`${process.env.NEXT_PUBLIC_BASE_URL_API}/users/verifyToken`, {
      //     token,
      //   })
      //   .then((res) => {
      //     console.log("RESPONSE:", res.data);
      //     setIsUserLoggedIn(true);
      //     setIsLoading(false);
      //     return axios
      //       .get(
      //         `${process.env.NEXT_PUBLIC_BASE_URL_API}/users/${res.data.data._id}`
      //       )
      //       .then((res) => {
      //         console.log("SECOND RES:", res.data);
      //         setUser(res.data.data);
      //         setClasses(res.data.data.classes);
      //       })
      //       .catch((err) => {});
      //   })
      //   .catch((err) => {
      //     //   toast.error(err.response.data.message);
      //     Router("/login");
      //     toast.error(
      //       "Session expired. Please log in to continue to your dashboard."
      //     );
      //     setIsLoading(false);
      //   });
    }
    validateSession();
  }, []);
  async function fetchClasses() {
    console.log("USERID:", user?._id);
    await axios
      .get("http://localhost:3001/student/get-classes/" + user?._id)
      .then((res) => {
        console.log("CLASSES:", res);
        setClasses(res.data.Data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }
  async function fetchAbsences() {
    console.log("USERID:", user?._id);
    await axios
      .get("http://localhost:3001/student/get-absences/" + user?._id)
      .then((res) => {
        console.log("ABSENCES:", res);
        setAbsences(res.data.Data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }
  async function fetchCourses() {
    console.log("USERID:", user?._id);
    await axios
      .get("http://localhost:3001/student/get-courses/" + user?._id)
      .then((res) => {
        console.log("COURSES:", res);
        setCourses(res.data.Data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }
  async function fetchLessons() {
    console.log("USERID:", user?._id);
    await axios
      .get("http://localhost:3001/student/get-lessons/")
      .then((res) => {
        console.log("LESSONS:", res);
        setLessons(res.data.Data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  useEffect(() => {
    fetchClasses();
    fetchAbsences();
    fetchCourses();
    fetchLessons();
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        classes,
        setClasses,
        currentPage,
        setTheCurrentPage,
        absences,
        courses,
        lessons,
      }}
    >
      <ToastContainer />
      <DashboardNavbar page={props?.page} />
      {/* BODY */}
      <div className="p-10 lg:pl-[25%] scrollbar-thin bg-[#113775] text-white min-h-screen">
        <DahboardTopBar />
        {props.children}
      </div>
    </UserContext.Provider>
  );
}

export default StudentDashboard;
