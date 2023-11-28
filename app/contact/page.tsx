import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | BRAIN HUB LABS",
  description: "Know the details to reach BrainHub Labs.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="If you like to work with us then drop us a message using the contact form.
        Or get in touch using email, skype or contact number.
        See you!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
