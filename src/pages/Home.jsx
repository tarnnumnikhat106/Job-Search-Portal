import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white text-center">
          Find Your Dream Job
        </h1>

        <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 text-center">
          Search thousands of opportunities from top companies
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/jobs")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Browse Jobs
          </button>

          <button
            onClick={() => navigate("/post-job")}
            className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg"
          >
            Post a Job
          </button>
        </div>
      </section>

     
{/* Featured Jobs Section */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-4xl font-bold text-center dark:text-white mb-12">
    Featured Jobs
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold dark:text-white">
        Frontend Developer
      </h3>
      <p className="text-gray-500 mt-2">Google • Remote</p>
      <p className="mt-3 text-blue-600 font-semibold">₹12 LPA</p>
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold dark:text-white">
        Backend Developer
      </h3>
      <p className="text-gray-500 mt-2">Amazon • Bangalore</p>
      <p className="mt-3 text-blue-600 font-semibold">₹15 LPA</p>
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold dark:text-white">
        Full Stack Developer
      </h3>
      <p className="text-gray-500 mt-2">Microsoft • Hyderabad</p>
      <p className="mt-3 text-blue-600 font-semibold">₹18 LPA</p>
    </div>
  </div>
</section>
<section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-4xl font-bold text-center dark:text-white mb-12">
    Popular Categories
  </h2>

  <div className="grid md:grid-cols-4 gap-6">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
      <h3 className="font-bold text-lg dark:text-white">
        Software Development
      </h3>
      <p className="text-gray-500 mt-2">
        1200+ Jobs
      </p>
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
      <h3 className="font-bold text-lg dark:text-white">
        Data Science
      </h3>
      <p className="text-gray-500 mt-2">
        850+ Jobs
      </p>
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
      <h3 className="font-bold text-lg dark:text-white">
        UI/UX Design
      </h3>
      <p className="text-gray-500 mt-2">
        600+ Jobs
      </p>
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
      <h3 className="font-bold text-lg dark:text-white">
        Marketing
      </h3>
      <p className="text-gray-500 mt-2">
        400+ Jobs
      </p>
    </div>
  </div>
</section>
{/* Statistics Section */}
<section className="bg-blue-600 py-16 mt-10">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-8 text-center text-white">
      <div>
        <h2 className="text-4xl font-bold">10K+</h2>
        <p className="mt-2">Active Jobs</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">5K+</h2>
        <p className="mt-2">Companies</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">50K+</h2>
        <p className="mt-2">Candidates</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">95%</h2>
        <p className="mt-2">Success Rate</p>
      </div>
    </div>
  </div>
</section>
{/* Top Companies */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-4xl font-bold text-center dark:text-white mb-12">
    Top Companies Hiring
  </h2>

  <div className="grid md:grid-cols-4 gap-6">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
      <h3 className="font-bold text-xl dark:text-white">Google</h3>
      <p className="text-gray-500 mt-2">250 Open Positions</p>
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
      <h3 className="font-bold text-xl dark:text-white">Amazon</h3>
      <p className="text-gray-500 mt-2">180 Open Positions</p>
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
      <h3 className="font-bold text-xl dark:text-white">Microsoft</h3>
      <p className="text-gray-500 mt-2">140 Open Positions</p>
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
      <h3 className="font-bold text-xl dark:text-white">Infosys</h3>
      <p className="text-gray-500 mt-2">320 Open Positions</p>
    </div>
  </div>
</section>
<Footer />

      
    </div>
  );
};

export default Home;
