import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingJobs =
      JSON.parse(localStorage.getItem("postedJobs")) || [];

    const newJob = {
      id: Date.now(),
      ...jobData,
    };

    localStorage.setItem(
      "postedJobs",
      JSON.stringify([...existingJobs, newJob])
    );

    alert("Job Posted Successfully!");

    setJobData({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-3xl mx-auto py-12 px-6">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6">
            Post a New Job
          </h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={jobData.title}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={jobData.company}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={jobData.location}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <input
              type="text"
              name="salary"
              placeholder="Salary"
              value={jobData.salary}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mb-4"
            />

            <textarea
              name="description"
              placeholder="Job Description"
              value={jobData.description}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border rounded-lg mb-4"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PostJob;