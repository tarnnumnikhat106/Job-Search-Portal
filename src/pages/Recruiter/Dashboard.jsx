import { useEffect, useState } from "react";

const Dashboard = () => {
const [totalJobs, setTotalJobs] = useState(0);
const [totalApplications, setTotalApplications] = useState(0);

useEffect(() => {
const jobs =
JSON.parse(localStorage.getItem("postedJobs")) || [];


const applications =
  JSON.parse(localStorage.getItem("applications")) || [];

setTotalJobs(jobs.length);
setTotalApplications(applications.length);


}, []);

return ( <div className="p-8"> <h1 className="text-4xl font-bold mb-8">
Recruiter Dashboard </h1>


  <div className="grid md:grid-cols-3 gap-6">
    <div className="border p-6 rounded-lg">
      <h2>Total Jobs Posted</h2>
      <p className="text-3xl font-bold">
        {totalJobs}
      </p>
    </div>

    <div className="border p-6 rounded-lg">
      <h2>Total Applications</h2>
      <p className="text-3xl font-bold">
        {totalApplications}
      </p>
    </div>

    <div className="border p-6 rounded-lg">
      <h2>Total Applicants</h2>
      <p className="text-3xl font-bold">
        {totalApplications}
      </p>
    </div>
  </div>
</div>


);
};

export default Dashboard;
