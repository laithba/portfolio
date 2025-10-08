import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    emailjs
      .sendForm(
        "service_fb018yj",
        "template_ncne6w6",
        form.current,
        "gWTkhlaIAIuyKriiy"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send message.");
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact_container">
        {/* Left Card */}
        <div className="contact_card">
          <h3>Contact Info</h3>
          <p>Reach out via any of the following platforms:</p>
          <div className="contact_methods">
            <a href="mailto:laithmousa93@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope /> Email
            </a>
            <a href="https://www.linkedin.com/in/lbarakat02/" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://www.facebook.com/laith.king.902266" target="_blank" rel="noreferrer">
              <FaFacebook /> Facebook
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="contact_card">
          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required />
            <button type="submit" className="btn">Send</button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
