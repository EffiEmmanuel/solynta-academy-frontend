import { createContext, useEffect, useState } from "react";

import DahboardTopBar from "./DashboardTopBar";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import DashboardNavbar from "./DashboardNavbar";
import { useNavigate } from "react-router-dom";

// Creating a user context to manage state
export const TeacherContext = createContext();

function Dashboard(props) {
  const [teacher, setTeacher] = useState();
  const [projects, setProjects] = useState();

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
      const user = JSON.parse(localStorage.getItem("teacher"));
      if (!user) {
        Router("/login");
        //   setIsLoading(false);
        return toast.error("You must be logged in.");
      }

      if (user) {
        setTeacher(user);
      }
    }
    validateSession();
  }, []);

  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [books, setBooks] = useState([]);
  //   const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function getStats() {
      let students = [];
      teacher?.classes?.forEach((teacherClass) => {
        if (teacherClass?.student) {
          teacherClass?.student?.forEach((teacherStudent) => {
            students?.push(teacherStudent);
          });
        }
      });

      let classes = [];
      teacher?.classes?.forEach((teacherClass) => {
        classes?.push(teacherClass);
      });

      setStudents(students);
      setClasses(classes);
    }

    getStats();
  }, [teacher]);

  return (
    <TeacherContext.Provider
      value={{ teacher, students, classes, currentPage, setTheCurrentPage }}
    >
      <ToastContainer />
      <DashboardNavbar page={props?.page} />
      {/* BODY */}
      <div className="p-10 lg:pl-[25%] scrollbar-thin bg-solyntaBlue text-white min-h-screen">
        <DahboardTopBar />
        {props.children}
      </div>
    </TeacherContext.Provider>
  );
}

export default Dashboard;
