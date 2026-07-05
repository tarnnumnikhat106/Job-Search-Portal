import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

import JobSearch from "./pages/Seeker/JobSearch";
import JobDetails from "./pages/Seeker/JobDetails";
import Applications from "./pages/Seeker/Applications";
import SeekerProfile from "./pages/Seeker/SeekerProfile";
import ApplicationForm from "./pages/Seeker/ApplicationForm";

import Dashboard from "./pages/Recruiter/Dashboard";
import PostJob from "./pages/Recruiter/PostJob";
import ManageApplicants from "./pages/Recruiter/ManageApplicants";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Job Search */}
      <Route
  path="/jobs"
  element={<JobSearch />}
/>

      {/* Job Details */}
     <Route
  path="/job/:id"
  element={<JobDetails />}
/>

      {/* Applications */}
     <Route
  path="/applications"
  element={<Applications />}
/>
 
      <Route
  path="/apply"
  element={<ApplicationForm />}
/>
      {/* Profile */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <SeekerProfile />
          </ProtectedRoute>
        }
      />

      {/* Recruiter Dashboard */}
      <Route
  path="/dashboard"
  element={<Dashboard />}
/>

  <Route path="/post-job" element={<PostJob />} />

      <Route
  path="/applicants"
  element={<ManageApplicants />}
/>
    </Routes>
  );
}

export default App;