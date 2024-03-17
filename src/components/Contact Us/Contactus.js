import React from "react";
import contactUsImage from "../../assets/Contact us.svg"; // Import your contact us image

function Contact() {
  return (
    <div id="faq" className="contact-container">
      <img src={contactUsImage} alt="Contact Us" className="contact-image" />
    </div>
  );
}

export default Contact;
