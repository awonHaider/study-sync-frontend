import React from "react";
import { useState } from "react";
import "./App.css";
import SignUp from "./Pages/SignUp/index.jsx";
import LogIn from "./Pages/LogIn/index.jsx";
import Layout from "./Layout/Homepage/index.jsx";
import Homepage from "./Pages/Homepage";
import MainPage from "./Pages/MainPage";
import VerifyEmail from "./Pages/VerifyEmail/index.jsx";
import ForgotPassword from "./Pages/ForgotPasswordPages";
import EnterCode from "./Pages/ForgotPasswordPages/EnterCode.jsx";
import SetupNewPassword from "./Pages/ForgotPasswordPages/SetupNewPassword.jsx";
import PassResetSuccess from "./Pages/ForgotPasswordPages/PassResetSuccess.jsx";
import ContactUs from "./Pages/ContactUs/index.jsx";
import AdminLogIn from "./Pages/AdminPages/AdminLogIn/index.jsx";
import AdminDashboard from "./Pages/AdminPages/AdminDashboard";
import SignUpSuccess from "./Pages/SignUp/SignUpSuccess.jsx";
import VideoCall from "./Pages/VideoCall/";
import AboutUs from "./Pages/AboutUs/index.jsx";
import CreateSession from "./Components/MainPage/CreateSession.jsx";

function App() {
  return (
    // Responsive Pages

    // <Homepage />

    // Not Responsive Pages
    <MainPage />

    // <AdminDashboard />

    // <VideoCall />

    // Finalized
    // -------------------------------

    // <AboutUs />
    // <ContactUs />
    // <LogIn />
    // <VerifyEmail />
    // <SignUp />
    // <EnterCode />
    // <PassResetSuccess />
    // <ForgotPassword />
    // <SetupNewPassword />
    // <SignUpSuccess />
    // <AdminLogIn />
  );
}

export default App;
