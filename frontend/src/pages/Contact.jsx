
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    // Form validation (Basic)
    if (!form.name || !form.email || !form.message) {
      setResponseMessage("All fields are required!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // Clear form
      } else {
        setResponseMessage(data.error || "Failed to send message. Try again.");
      }
    } catch (error) {
      console.log(error)
      setResponseMessage("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <a href="mailto:shahjugal067@gmail.com" className="flex items-center gap-2 mb-2"><FaEnvelope /> shahjugal067@gmail.com</a>
          <a href="tel:+9779846638937" className="flex items-center gap-2 mb-2"><FaPhone /> +977 9846638937</a>
  
          <a href="https://www.google.com/maps?q=27.67871,85.257627" target="_blank" rel="noopener noreferrer">
          <p className="flex items-center gap-2"><FaMapMarkerAlt /> Naikap, Kathmandu, Nepal</p>
          </a>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.youtube.com/jugalsah143@yahoo.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-yellow-500 "><FaFacebook /></a>
            <a href="https://www.youtube.com/jugal.shah.1293" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl hover:text-yellow-500"><FaInstagram /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-yellow-500"><FaTwitter /></a>
            <a href="https://www.youtube.com/@jugalshah-x30" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 text-2xl"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/jugal-shah-44a6bb157" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 text-2xl"><FaGithub/></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded-md" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded-md" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required className="w-full p-2 border rounded-md" rows="4"></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {responseMessage && <p className="mt-4 text-center text-gray-700">{responseMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
