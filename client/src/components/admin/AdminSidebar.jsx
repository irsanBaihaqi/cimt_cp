import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSideBar = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Fungsi untuk cek apakah path aktif
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 bg-opacity-50 z-30"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 w-64 bg-primary text-black shadow-md h-screen flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              className="w-8 h-8"
              alt="Logo PT CIMT"
            />
            <span className="font-bold text-lg">CIMT</span>
          </div>
          <button onClick={onClose} className="lg:hidden cursor-pointer">
            <img src="/icons/close.svg" alt="Close" width={24} height={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 px-4 flex-1 overflow-y-auto">
          <ul className="space-y-1">
            <li>
              <Link
                to="/admin"
                className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                  isActive("/admin")
                    ? "bg-accent text-primary"
                    : "hover:bg-gray-300"
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/products"
                className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                  isActive("/admin/products")
                    ? "bg-accent text-primary"
                    : "hover:bg-gray-300"
                }`}
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                to="/admin/organization"
                className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                  isActive("/admin/organization")
                    ? "bg-accent text-primary"
                    : "hover:bg-gray-300"
                }`}
              >
                Organisasi
              </Link>
            </li>
            <li>
              <Link
                to="/admin/reservations"
                className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                  isActive("/admin/reservations")
                    ? "bg-accent text-primary"
                    : "hover:bg-gray-300"
                }`}
              >
                Reservasi
              </Link>
            </li>
            <li>
              <Link
                to="/admin/blog"
                className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                  isActive("/admin/blog")
                    ? "bg-accent text-primary"
                    : "hover:bg-gray-300"
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/admin/notifikasi"
                className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                  isActive("/admin/notifikasi")
                    ? "bg-accent text-primary"
                    : "hover:bg-gray-300"
                }`}
              >
                Notification
              </Link>
            </li>
            <li>
              <Link
                to="/admin/content-management"
                className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                  isActive("/admin/content-management")
                    ? "bg-accent text-primary"
                    : "hover:bg-gray-300"
                }`}
              >
                Content Management
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="mt-auto p-4">
          <Link
            to="/admin/login"
            className="flex items-center gap-3 py-3 px-6 hover:bg-red text-red-600 hover:text-white transition-colors duration-200 rounded-lg"
          >
            <img
              src="/icons/logout.svg"
              alt="Logout Icon"
              width={20}
              height={20}
              className="text-red-600"
            />
            Logout
          </Link>
        </div>
      </aside>
    </>
  );
};

export default AdminSideBar;