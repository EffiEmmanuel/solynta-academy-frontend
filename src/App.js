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

// Student Components
import StudentDashboardOverview from "./pages/students/Dashboard";
import Courses from "./pages/students/Courses";
import StudentLessonsPage from "./pages/students/Lessons";
import StudentProgressTrackingPage from "./pages/students/ProgressTracking";
import StudentCommunicationToolsPage from "./pages/students/CommunicationTools";
import ParentDashboardOverview from "./pages/parents/Dashboard";
import ChildPerformancePage from "./pages/parents/ChildPerformance";
import TeachersNotesPage from "./pages/parents/TeachersNotes";
import ParentCommunicationToolsPage from "./pages/parents/CommunicationTools";

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

        {/* Dashboard routes - Teacher */}
        <Route path="/teacher/dashboard">
          <Route
            path=""
            element={
              <ProtectedRoute>
                <TeacherDashboardOverview />
              </ProtectedRoute>
            }
          />
          <Route
            path="student-monitoring"
            element={
              <ProtectedRoute>
                <StudentMonitoringPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="communication-tools"
            element={
              <ProtectedRoute>
                <CommunicationToolsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="resource-library"
            element={
              <ProtectedRoute>
                <ResourceLibraryPage />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Dashboard routes - Student */}
        <Route path="/student/dashboard">
          <Route
            path=""
            element={
              <ProtectedRoute>
                <StudentDashboardOverview />
              </ProtectedRoute>
            }
          />
          <Route
            path="courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path="lessons"
            element={
              <ProtectedRoute>
                <StudentLessonsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="progress-tracking"
            element={
              <ProtectedRoute>
                <StudentProgressTrackingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="communication-tools"
            element={
              <ProtectedRoute>
                <StudentCommunicationToolsPage />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Dashboard routes - Parent */}
        <Route path="/parent/dashboard">
          <Route
            path=""
            element={
              <ProtectedRoute>
                <ParentDashboardOverview />
              </ProtectedRoute>
            }
          />
          <Route
            path="childs-performance"
            element={
              <ProtectedRoute>
                <ChildPerformancePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="teachers-notes"
            element={
              <ProtectedRoute>
                <TeachersNotesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="communication-tools"
            element={
              <ProtectedRoute>
                <ParentCommunicationToolsPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
