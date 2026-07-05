import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
const { dark, toggleTheme } = useContext(ThemeContext);
const { user, logout } = useContext(AuthContext);
const navigate = useNavigate();

return ( <nav className="bg-white dark:bg-gray-800 shadow-md"> <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"> <h1 className="text-2xl font-bold text-blue-600">
JobPortal </h1>

```
    <div className="flex items-center gap-6">
      <Link to="/" className="dark:text-white">
        Home
      </Link>

      <Link to="/jobs" className="dark:text-white">
        Jobs
      </Link>

      <Link to="/dashboard" className="dark:text-white">
        Dashboard
      </Link>

      <Link to="/login" className="dark:text-white">
        Login
      </Link>

      <Link
        to="/signup"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Sign Up
      </Link>
      {user && (<button
onClick={() => {
logout();
navigate("/login");
}}
className="bg-red-500 text-white px-4 py-2 rounded-lg"

>


Logout


  </button>
)}



      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  </div>
</nav>


);
};

export default Navbar;
