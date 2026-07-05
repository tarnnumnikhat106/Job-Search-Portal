import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-8">
          My Applications
        </h1>

        {applications.length === 0 ? (
          <p>No Applications Found</p>
        ) : (
          applications.map((app) => (
            <div
              key={app.id}
              className="bg-white p-5 rounded-xl shadow mb-4"
            >
              <h2 className="text-xl font-bold">
                {app.name}
              </h2>

              <p>{app.email}</p>

              <p className="text-blue-600">
                {app.resume}
              </p>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Applications;