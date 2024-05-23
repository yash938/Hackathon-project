import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

import "./contact.css";
const defaultContact = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [contactData, setContactData] = useState(defaultContact);

  const [userData, setUserData] = useState(true); // Set to false initially

  const { user } = useAuth();

  if(userData && user){
    setContactData({
      username:user.username,
      email:user.email,
      message:"",
    })
    setUserData(false)
  }


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // Update the contactData state with the new input value
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fix the typo here
        },
        body: JSON.stringify(contactData), // Send contactData instead of user
      });

      if (response.ok) {

        setContactData(defaultContact);
        const data = await response.json(); // await response.json() to get the response data
        console.log(data);
        toast.success("Contact submitted");
      } else {
        toast.error("not sent contact")
        // Handle non-200 status codes
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error submitting contact:", error);
      alert("Error submitting contact");
    }
  };

  return (
    <>
      <div className="contact-main">
        <div className="contact-info-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="login-header">
              <div className="title">Contact us</div>
            </div>
            <input
              type="text"
              className="contact-input"
              name="username"
              id="username"
              onChange={handleInput}
              value={contactData.username}
              placeholder="Enter your Name"
            />
            <input
              type="email"
              className="contact-input"
              name="email"
              id="email"
              onChange={handleInput}
              value={contactData.email}
              placeholder="Enter your email"
            />
            <textarea
              name="message"
              id="message"
              cols="42"
              rows="2"
              value={contactData.message}
              onChange={handleInput}
              placeholder="Message"
            ></textarea>
            <button className="login-button" id="login-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.609790004078!2d77.51978227482896!3d23.18443771026931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41b3bbba4b9f%3A0x9d9c1059c6c2b645!2sSAGE%20University%20Bhopal%20Admin%20Block!5e0!3m2!1sen!2sin!4v1711618363648!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Contact;
