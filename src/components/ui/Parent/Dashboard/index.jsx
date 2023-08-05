import { createContext, useEffect, useState } from "react";

import DahboardTopBar from "./DashboardTopBar";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import DashboardNavbar from "./DashboardNavbar";
import { useNavigate } from "react-router-dom";

// Creating a user context to manage state
export const ParentContext = createContext();

function ParentDashboard(props) {
  const [parent, setParent] = useState();
  const [children, setChildren] = useState();

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
      const parent = JSON.parse(localStorage.getItem("parent"));
      if (!parent) {
        Router("/login");
        //   setIsLoading(false);
        return toast.error("You must be logged in.");
      }

      if (parent) {
        setParent(parent);
        setChildren(parent?.children);
      }
    }
    validateSession();
  }, []);

  return (
    <ParentContext.Provider
      value={{ parent, children, setChildren, currentPage, setTheCurrentPage }}
    >
      <ToastContainer />
      <DashboardNavbar page={props?.page} />
      {/* BODY */}
      <div className="p-10 lg:pl-[25%] scrollbar-thin bg-[#113775] text-white min-h-screen">
        <DahboardTopBar />
        {props.children}
      </div>
    </ParentContext.Provider>
  );
}

export default ParentDashboard;
