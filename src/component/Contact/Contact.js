import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setformStatus] = useState(""); // Declared as setformStatus
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setformStatus("Please fill out all fields."); // Corrected to setformStatus
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setformStatus("Please provide a valid email address."); // Corrected to setformStatus
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setformStatus(""); // Corrected to setformStatus

    try {
      await emailjs.send(
        "service_95maf8p",
        "template_3bwmonf",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "3iFkhX_ebDkvxxvgi"
      );
      setformStatus("success"); // Corrected to setformStatus
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setformStatus(""), 5000); // Corrected to setformStatus
    } catch (error) {
      console.error("Error sending message:", error);
      setformStatus("error"); // Corrected to setformStatus
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to send a message!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {formStatus === "success" && (
          <p className="form-success">Message sent successfully!</p>
        )}
        {formStatus === "error" && (
          <p className="form-error">Failed to send message. Please try again.</p>
        )}
        {formStatus && formStatus !== "success" && formStatus !== "error" && (
          <p className="form-error">{formStatus}</p>
        )}
      </form>
    </div>
  );
}