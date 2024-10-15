import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false); // State for popup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ycwiiuw", // Replace with your EmailJS service ID
        "template_lpi3ggj", // Replace with your EmailJS template ID
        formData,
        "vz1r4wXiEEC93VpgT" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowPopup(true); // Show popup on success
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false); // Close popup when clicking the close button
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
       whileInView={{opacity:1, y:0}}
       initial= {{opacity:0, y:-100}}
       transition= {{duration: 0.5}}
       className="my-10 text-center text-4xl font-thin">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-neutral-900 text-purple-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-neutral-900 text-purple-400 w-full p-2 border border-gray-300 rounded "
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-neutral-900 text-purple-400"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-800 text-white-700 px-4 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-purple-700 p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white">Message Sent!</h3>
            <p className="mb-4 text-gray-300">Thank you for reaching out. We will get back to you soon.</p>
            <button
              onClick={closePopup}
              className="bg-purple-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
