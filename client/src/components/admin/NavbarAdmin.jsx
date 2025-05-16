// client/src/components/admin/NavbarAdmin.jsx
import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = ({ onMenuClick }) => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-primary p-6 flex justify-between items-center w-full fixed top-0 lg:justify-end lg:relative ">
      {/* Hamburger Button */}
      <button
        onClick={onMenuClick}
        className="text-blue-800 focus:outline-none lg:hidden cursor-pointer"
      >
        <img src="/icons/menu.svg" alt="Menu" width={24} height={24} />
      </button>

      {/* Right Section: Notification Icon + Date */}
      <div className="flex items-center space-x-8">
        {/* Date Display */}
        <span className="text-sm text-gray-700 hidden sm:block">{today}</span>
        <Link to="/admin/notifikasi" className="flex items-center relative">
          <img
            src="/icons/notification.svg"
            alt="Notifications"
            width={24}
            height={24}
          />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-ping">
            •
          </span>
        </Link>
      </div>
    </header>
  );
};

export default NavbarAdmin;
