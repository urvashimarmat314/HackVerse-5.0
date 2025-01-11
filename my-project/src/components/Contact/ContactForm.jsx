import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission by logging form data or showing an alert
    console.log("Form submitted:", formData);
    alert(`Thank you for your message, ${formData.name}!`);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div className="bg-blue-900 text-white p-8 rounded-md">
          <h2 className="text-blue-300 uppercase text-sm mb-2">Get in Touch</h2>
          <h1 className="text-3xl font-bold mb-6">Contact</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-blue-800 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-blue-800 focus:outline-none"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-blue-800 focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-blue-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-300 text-blue-900 font-bold rounded-md hover:bg-blue-400 transition duration-200"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-200 text-blue-900 p-6 rounded-md text-center">
            <h3 className="font-bold mb-2">EMERGENCY</h3>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-md text-center">
            <h3 className="font-bold mb-2">LOCATION</h3>
            <p>0123 Some place</p>
            <p>9876 Some country</p>
          </div>
          <div className="bg-blue-200 text-blue-900 p-6 rounded-md text-center">
            <h3 className="font-bold mb-2">EMAIL</h3>
            <p>fildineeesoe@gmail.com</p>
            <p>myebstudios@gmail.com</p>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-md text-center">
            <h3 className="font-bold mb-2">WORKING HOURS</h3>
            <p>Mon-Sat: 09:00-20:00</p>
            <p>Sunday Emergency only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
