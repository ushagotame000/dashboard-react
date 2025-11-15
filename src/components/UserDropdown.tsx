import { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  // Static user info
  const userName = "Usha Gotame";

  return (
    <div className="relative">
      {/* User Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11 flex items-center justify-center border">
          <FaUser className="text-xl" />
        </span>

        <span className="mr-1 font-medium">{userName}</span>

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
        <div className="absolute right-0 mt-4 w-48 rounded-xl border bg-white shadow-lg dark:border-gray-800 p-2">
          <button
            onClick={() => {
              closeDropdown();
              alert("Signed out!");
            }}
            className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 "
          >
            <FaSignOutAlt />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
