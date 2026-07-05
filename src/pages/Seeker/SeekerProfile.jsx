import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const SeekerProfile = () => {
const userEmail = "[user@gmail.com](mailto:user@gmail.com)";

return ( <div className="min-h-screen bg-gray-100 dark:bg-gray-900"> <Navbar />


  <div className="max-w-3xl mx-auto py-12 px-6">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        My Profile
      </h1>

      <div className="space-y-4">
        <div>
          <p className="text-gray-500">Name</p>
          <h2 className="text-xl font-semibold dark:text-white">
            Tarnnum
          </h2>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <h2 className="text-xl font-semibold dark:text-white">
            {userEmail}
          </h2>
        </div>

        <div>
          <p className="text-gray-500">Role</p>
          <h2 className="text-xl font-semibold dark:text-white">
            Job Seeker
          </h2>
        </div>
      </div>

      <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
        Edit Profile
      </button>
    </div>
  </div>

  <Footer />
</div>


);
};

export default SeekerProfile;
