import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const existingApplications =
    JSON.parse(localStorage.getItem("applications")) || [];

  const newApplication = {
    id: Date.now(),
    ...formData,
  };

  localStorage.setItem(
    "applications",
    JSON.stringify([...existingApplications, newApplication])
  );

  alert("Application Submitted Successfully!");

  setFormData({
    name: "",
    email: "",
    resume: "",
  });
};
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-2xl mx-auto py-12 px-6">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6 dark:text-white">
            Apply for Job
          </h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <input
              type="text"
              name="resume"
              placeholder="Paste Resume Link"
              value={formData.resume}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApplicationForm;