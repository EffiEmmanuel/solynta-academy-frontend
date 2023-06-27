import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import ProtectedRoute from "./components/security/ProtectedRoute";
import TeacherDashboardOverview from "./pages/teachers/Dashboard";
import StudentMonitoringPage from "./pages/teachers/StudentMonitoring";
import CommunicationToolsPage from "./pages/teachers/CommunicationTools";
import ResourceLibraryPage from "./pages/teachers/ResourceLibrary";

function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/faqs" element={<FaqPage />} />

        {/* Auth pages */}
        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        {/* Dashboard Routes - Teacher */}
        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute>
              <TeacherDashboardOverview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/dashboard/student-monitoring"
          element={
            <ProtectedRoute>
              <StudentMonitoringPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/dashboard/communication-tools"
          element={
            <ProtectedRoute>
              <CommunicationToolsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/dashboard/resource-library"
          element={
            <ProtectedRoute>
              <ResourceLibraryPage />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/user/dashboard/settings"
          element={
            <ProtectedRoute>
              <UserSettingsPage />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
