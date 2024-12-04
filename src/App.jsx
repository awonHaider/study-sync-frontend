import { useState } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

import "./App.css";
import SignUpPage from "./Pages/SignUpPage";
import LogInPage from "./Pages/LogInPage";
import Layout from "./Layout";
import Homepage from "./Pages/Homepage";
import MainPage from "./Pages/MainPage";
import VerifyEmailPage from "./Pages/VerifyEmailpage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPages";
import EnterCodePage from "./Pages/ForgotPasswordPages/EnterCodePage";
import SetupNewPasswordPage from "./Pages/ForgotPasswordPages/SetupNewPasswordPage";
import PassResetSuccessPage from "./Pages/ForgotPasswordPages/PassResetSuccessPage";
import ContactUsPage from "./Pages/ContactUsPage";
import AboutUsPage from "./Pages/AboutUsPage";
import AdminLogInPage from "./Pages/AdminPages/LogInPage";
import AdminDashboard from "./Pages/AdminPages/AdminDashboard";
import SignUpSuccessPage from "./Pages/SignUpPage/SignUpSuccesspage.jsx";
function App() {
  return (
    // Responsive Pages
    // <SignUpPage></SignUpPage>
    // <LogInPage />
    <Layout>
      <Homepage></Homepage>
    </Layout>
    // <VerifyEmailPage />
    // <ForgotPasswordPage />
    // <EnterCodePage />
    // <SetupNewPasswordPage />
    // <PassResetSuccessPage />
    // <SignUpSuccessPage />
    // <Layout>
    //   <AboutUsPage />
    // </Layout>
    // Not Responsive Pages
    // <MainPage />

    // <AdminLogInPage />

    // <AdminDashboard />
  );
}

export default App;
