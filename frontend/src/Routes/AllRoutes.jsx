import React from "react";
import { Route, Routes } from "react-router-dom";
import ApplicantInformation from "../Pages/ApplicantInformation";
import CompaniesPage from "../Pages/CompaniesPage";
import CompanyDashboard from "../Pages/CompanyDashboard";
import Courses from "../Pages/Courses";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Home from "../Pages/Home";
import InterviewRoom from "../Pages/InterviewRoom";
import JobDetails from "../Pages/JobDetails";
import JobListing from "../Pages/JobListing";
import JobPosting from "../Pages/JobPosting";
import MockInterviewPage from "../Pages/MockInterviewPage";
import Resume from "../Pages/Resume";
import RoadMap from "../Pages/RoadMap";
import SavedJobs from "../Pages/SavedJobs";
import Training from "../Pages/Training/Training";
import UserProfile from "../Pages/UserProfile";
import UserPublicProfile from "../Pages/UserPublicProfile";
import CompanyOnboarding from "../components/LoginSignup/CompanyOnboarding";
import Login from "../components/LoginSignup/Login";
import Signup from "../components/LoginSignup/Signup";
import UserOnboaring from "../components/LoginSignup/UserOnboaring";
import NotFound from "../components/NotFound";
import PrivateRoutes from "./PrivateRoutes";
import MockInterviewLanding from "../Pages/MockInterviewLanding";
import SkillsDropdown from "../components/MockInterview/SkillsDropdown";
import Networking from "../Pages/Networking";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobs" element={<JobListing />} />
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path="/courses" element={<Courses />} />
      <Route path='/courses/:id' element={<CourseDetails/>}></Route>
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/user/:id" element={<UserPublicProfile />} />
      <Route path="/roadmap" element={<RoadMap/>} />
      <Route path="/sheets" element={<Training/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/network" element={<Networking/>} />

      <Route path="/mock-interview-landing" element={<MockInterviewLanding/>} />
      <Route path="/mock-interview-info" element={<SkillsDropdown/>} />
      <Route path="/mock-interview" element={<MockInterviewPage/>} />



      <Route
        path="/dashboard/*"
        element={
          <PrivateRoutes>
            <CompanyDashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        }
      />
      <Route
        path="/room"
        element={
          <PrivateRoutes>
            <InterviewRoom />
          </PrivateRoutes>
        }
      />
      <Route
        path="/post-new-job"
        element={
          <PrivateRoutes>
            <JobPosting />
          </PrivateRoutes>
        }
      />
      <Route
        path="/applicant"
        element={
          <PrivateRoutes>
            <ApplicantInformation />
          </PrivateRoutes>
        }
      />
      <Route path="/user-onboarding" element={<UserOnboaring />} />
      <Route path="/company-onboarding" element={<CompanyOnboarding />} />
      <Route path="/saved-jobs" element={<SavedJobs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
