const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-600">
              JobPortal
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Connecting talented professionals with top companies worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 dark:text-white">
              Company
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 dark:text-white">
              Job Seekers
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Browse Jobs</li>
              <li>Career Advice</li>
              <li>Resume Builder</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 dark:text-white">
              Recruiters
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Post Jobs</li>
              <li>Search Candidates</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>

        <div className="border-t dark:border-gray-700 mt-8 pt-6 text-center text-gray-500 dark:text-gray-400">
          © 2026 JobPortal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;