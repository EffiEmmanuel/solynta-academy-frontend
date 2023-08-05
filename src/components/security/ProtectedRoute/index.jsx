import React from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  // Check if user is logged in
  let isUserLoggedIn;
  if (role === "student") {
    isUserLoggedIn = localStorage.getItem("student");
  } else if (role === "teacher") {
    isUserLoggedIn = localStorage.getItem("teacher");
  } else {
    isUserLoggedIn = localStorage.getItem("parent");
  }

  if (!isUserLoggedIn) {
    localStorage.clear();
    return <Navigate to="/auth/login" replace />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
