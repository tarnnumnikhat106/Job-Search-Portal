import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import jobsData from "../../data/jobs";



const JobSearch = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState(jobsData);

  useEffect(() => {
    const postedJobs =
      JSON.parse(localStorage.getItem("postedJobs")) || [];

    setJobs([...jobsData, ...postedJobs]);
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center dark:text-white mb-8">
          Find Your Perfect Job
        </h1>

        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl border mb-10"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold dark:text-white">
                {job.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {job.company} • {job.location}
              </p>

              <p className="text-blue-600 font-semibold mt-3">
                {job.salary}
              </p>

              <button
                onClick={() => navigate(`/job/${job.id}`)}
                className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <h2 className="text-center text-red-500 text-xl font-semibold mt-10">
            No Jobs Found
          </h2>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default JobSearch;