import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import jobs from "../../data/jobs";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return <h1 className="text-center mt-10">Job Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold dark:text-white">
            {job.title}
          </h1>

          <p className="text-gray-500 mt-3">
            {job.company} • {job.location} • {job.salary}
          </p>

          <h2 className="text-2xl font-semibold mt-8 dark:text-white">
            Job Description
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {job.description}
          </p>

          <button
  onClick={() => navigate("/apply")}
  className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
>
  Apply Now
</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetails;