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
import { Routes, Route } from "react-router-dom";
import LoadingScreen from "./Pages/VideoCall/LoadingScreen";

import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

function App() {
  return (
    // Responsive Pages

    // <Homepage />

    // Not Responsive Pages
    // <MainPage />

    // <Testing />
    // <AdminDashboard />

    <AgoraRTCProvider client={client}>
      <VideoCall />
    </AgoraRTCProvider>

    // <LoadingScreen />

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

    // <Routes>
    //   <Route path="/" element={<Homepage />} />
    //   <Route path="/about-us" element={<AboutUs />} />
    //   <Route path="/contact-us" element={<ContactUs />} />
    //   <Route path="/signup" element={<SignUp />} />
    //   <Route path="/login" element={<LogIn />} />
    //   <Route path="/signup-success" element={<SignUpSuccess />} />
    // </Routes>
  );
}

export default App;
