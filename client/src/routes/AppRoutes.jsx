// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";

// Halaman User
import Home from "../pages/user/Home";
import AboutUs from "../pages/user/AboutUs";
import Products from "../pages/user/Products";
import Contact from "../pages/user/Contact";
import Blog from "../pages/user/Blog";
import Reservation from "../pages/user/Reservation";
import UserLayout from "../components/user/UserLayout";

// Halaman Admin
import Dashboard from "../pages/admin/Dashboard";
import ProductsAdmin from "../pages/admin/ProductsAdmin";
import OrganizationAdmin from "../pages/admin/OrganizationAdmin";
import ReservationAdmin from "../pages/admin/ReservationsAdmin";
import BlogAdmin from "../pages/admin/BlogAdmin";
import Login from "../pages/auth/Login";
import ErrorPage from "../pages/error/ErrorPage";
import AdminLayout from "../components/admin/AdminLayout";
import Notifikasi from "../pages/admin/Notifikasi";
import ContentManagement from "../pages/admin/ContentManagement";

function AppRoutes() {
  return (
    <Routes>
      {/* User Routes with Layout */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/blog" element={<Blog />} />
      </Route>

      {/* Admin Routes with AdminLayout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<ProductsAdmin />} />
        <Route path="organization" element={<OrganizationAdmin />} />
        <Route path="reservations" element={<ReservationAdmin />} />
        <Route path="blog" element={<BlogAdmin />} />
        <Route path="notifikasi" element={<Notifikasi />} />
        <Route path="content-management" element={<ContentManagement />} />
      </Route>

      {/* 404 - Page Not Found */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRoutes;
