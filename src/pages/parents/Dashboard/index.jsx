import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../../../components/ui/Teacher/Dashboard";
import TeacherDashboardHome from "../../../components/ui/Teacher/Dashboard/TeacherDashboardHome";
import ParentDashboardHome from "../../../components/ui/Parent/Dashboard/ParentDashboardHome";
import ParentDashboard from "../../../components/ui/Parent/Dashboard";

function ParentDashboardOverview() {
  //   Protect Dashboard page
  const Router = useNavigate();
  const [loading, setIsLoading] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  useEffect(() => {
    async function validateSession() {
      const token = localStorage.getItem("token");
      if (!token) {
        Router("/login");
        //   setIsLoading(false);
        return toast.error("You must be logged in.");
      }

      await axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL_API}/users/verifyToken`, {
          token,
        })
        .then((res) => {
          console.log("RESPONSE:", res.data);
          setIsUserLoggedIn(true);
          setIsLoading(false);
        })
        .catch((err) => {
          toast.error(
            "Session expired. Please log in to continue to your dashboard."
          );
          Router("/login");
          setIsLoading(false);
        });
    }
    // validateSession();
  }, []);

  return (
    <>
      <ToastContainer />
      {isUserLoggedIn && (
        <ParentDashboard page="dashboard">
          <div></div>
          <ParentDashboardHome />
        </ParentDashboard>
      )}
    </>
  );
}

export default ParentDashboardOverview;
