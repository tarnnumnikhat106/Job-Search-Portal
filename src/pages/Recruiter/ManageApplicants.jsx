import React, { useEffect, useState } from "react";

const ManageApplicants = () => {
const [applications, setApplications] = useState([]);

useEffect(() => {
try {
const data =
JSON.parse(localStorage.getItem("applications")) || [];


  setApplications(data);
} catch (error) {
  console.log(error);
}


}, []);

return ( <div className="p-6"> <h1 className="text-4xl font-bold mb-6">
Manage Applicants </h1>


  <p className="text-lg mb-6">
    Total Applicants: {applications.length}
  </p>

  {applications.length === 0 ? (
    <p>No Applicants Found</p>
  ) : (
    applications.map((app) => (
      <div
        key={app.id}
        className="bg-white shadow-lg rounded-xl p-5 mb-4 border"
      >
        <h2 className="text-xl font-bold mb-2">
          👤 {app.name}
        </h2>

        <p className="mb-2">
          📧 {app.email}
        </p>

        <p>
          📄 {app.resume}
        </p>
      </div>
    ))
  )}
</div>


);
};

export default ManageApplicants;
