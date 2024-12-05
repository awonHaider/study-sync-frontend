import React from "react";
import Layout from "../../Layout/Homepage";
import AboutUsHead from "../../Components/AboutUs/AboutUsHead";
import OurValues from "../../Components/AboutUs/OurValues";
import GrowAndConnectForm from "../../Components/AboutUs/GrowAndConnectForm";

const AboutUs = () => {
  return (
    <>
      <Layout>
        {/* First Section - About Us */}
        <AboutUsHead />

        {/* Second Section - Our Values */}
        <OurValues />

        {/* Third Section - Grow and Connect*/}
        <GrowAndConnectForm />
      </Layout>
    </>
  );
};

export default AboutUs;
