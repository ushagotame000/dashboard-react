import { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UserDropdown() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
  const [logoutMsg, setLogoutMsg] = useState("");

  const handleLogout = () =>{
    localStorage.removeItem("username")
    setLogoutMsg("Logout Successfully!")
    setTimeout(()=>{
      setLogoutMsg("");
      navigate("/signin")
    }, 1500);
  }

  const userName = localStorage.getItem("username");

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center dark:text-gray-600"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11 flex items-center justify-center border border-gray-200 hover:text-dark-900 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
          <FaUser className="text-xl" />
        </span>

        <span className="mr-1 font-medium text-sm text-gray-700 dark:text-white/50">{userName}</span>

        <svg
          className={`stroke-gray-500  transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-100 right-0 mt-4 w-48 rounded-xl shadow-lg p-2 bg-white border border-gray-200 hover:text-dark-900 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800">
          <button
            onClick={() => {
              closeDropdown();
              handleLogout();
            }}
            className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 "
          >
            <FaSignOutAlt />
            Sign Out
          </button>
        </div>
      )}
      {logoutMsg && (
        <p className="text-green-300 text-sm mt-2 absolute right-0">
          {logoutMsg}
        </p>
      )}
    </div>
  );
}
