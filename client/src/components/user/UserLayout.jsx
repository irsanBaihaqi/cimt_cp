import React from "react";
import Navbar from "../core/Navbar";
import Footer from "../core/Footer";
import { Outlet } from "react-router-dom";

function UserLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      <div>
        <Outlet />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default UserLayout;