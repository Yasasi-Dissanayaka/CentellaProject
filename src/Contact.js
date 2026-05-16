import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const socialButtonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "none",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "16px",
    padding: 0,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "40px",
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Contact Form */}
        <div style={{ flex: "1 1 400px" }}>
          <h2 style={{ marginBottom: "10px", color: "#222" }}>Get in Touch</h2>
          <p style={{ marginBottom: "25px", color: "#555" }}>
            Have a question or feedback? Fill out the form below.
          </p>

          {submitted && (
            <div
              style={{
                padding: "12px",
                backgroundColor: "#d4edda",
                color: "#155724",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            >
              Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                margin: "8px 0",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                margin: "8px 0",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              style={{
                margin: "8px 0",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "14px",
                resize: "none",
              }}
              required
            />
            <button
              type="submit"
              style={{
                marginTop: "15px",
                padding: "12px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div style={{ flex: "1 1 300px" }}>
          <h3 style={{ marginBottom: "15px", color: "#222" }}>Contact Information</h3>
          <p style={{ color: "#555", marginBottom: "10px" }}>Email: support@example.com</p>

          <h4 style={{ margin: "20px 0 10px", color: "#222" }}>Follow Us</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              style={socialButtonStyle}
              onClick={() => window.open("https://facebook.com", "_blank", "noopener,noreferrer")}
            >
              <FaFacebookF /> Facebook
            </button>
            <button
              style={socialButtonStyle}
              onClick={() => window.open("https://twitter.com", "_blank", "noopener,noreferrer")}
            >
              <FaTwitter /> Twitter
            </button>
            <button
              style={socialButtonStyle}
              onClick={() => window.open("https://instagram.com", "_blank", "noopener,noreferrer")}
            >
              <FaInstagram /> Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
