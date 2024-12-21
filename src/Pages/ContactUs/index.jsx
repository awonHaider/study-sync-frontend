import React from "react";
import ReachOutToUs from "../../Components/ContactUs/ReachOutToUs";
import GetInTouchForm from "../../Components/ContactUs/GetInTouchForm";
import JoinUs from "../../Components/Common/JoinUs";
import Layout from "../../Layout/Homepage";

const ContactUs = () => {
  return (
    <>
      <Layout>
        {/* First Section - React Out To Us */}
        <ReachOutToUs />

        {/* Second Section - Get In Touch Form*/}
        <GetInTouchForm />

        {/* Last Section - Join Us */}
        <JoinUs />
      </Layout>
    </>
  );
};

export default ContactUs;
