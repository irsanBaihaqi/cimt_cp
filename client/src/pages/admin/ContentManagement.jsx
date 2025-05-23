// client/src/pages/admin/ContentManagement.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContentManagement() {
  const [content] = useState({
    hero_description:
      "Kami menyediakan alat berat industri seperti Crawler Crane, Shot Blasting Machine, Oil Tanker, dan lain-lain.",
    hero_image_url: "/images/heroimg.png",
    about_image_url: "/images/about.png",
    vision:
      "Menjadi mitra terpercaya dalam solusi teknologi industri di Asia Tenggara.",
    mission:
      "Meningkatkan produktivitas industri melalui inovasi teknologi dan layanan terbaik.",
    office_location:
      "JI. Orchard Boulevard No.7A Batam City, Kepulauan Riau 29444",
    company_email: "cimt.batam@gmail.com",
  });

  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-secondary mb-8">
        Kelola Konten Website
      </h1>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-fr">
        {/* Hero Description */}
        <div className="lg:col-span-2 bg-primary shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="p-5 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Hero Description</h2>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-600">{content.hero_description}</p>
          </div>
          <div className="p-5 pt-0 mt-auto">
            <Link
              to="/admin/content/edit/hero-description"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <img
                src="/icons/edit.svg"
                alt="Edit"
                width={16}
                height={16}
                className="mr-1"
              />
              Edit
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="bg-primary shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <h2 className="px-5 py-4 border-b border-gray-200 font-semibold text-gray-800">
              Hero Image
            </h2>
            <div className="p-5 flex justify-center">
              <img
                src={content.hero_image_url}
                alt="Hero"
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
          </div>
          <div className="p-5 pt-0">
            <Link
              to="/admin/content/edit/hero-image"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <img
                src="/icons/edit.svg"
                alt="Edit"
                width={16}
                height={16}
                className="mr-1"
              />
              Edit
            </Link>
          </div>
        </div>

        {/* About Image */}
        <div className="bg-primary shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <h2 className="px-5 py-4 border-b border-gray-200 font-semibold text-gray-800">
              About Image
            </h2>
            <div className="p-5 flex justify-center">
              <img
                src={content.about_image_url}
                alt="About"
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
          </div>
          <div className="p-5 pt-0">
            <Link
              to="/admin/content/edit/about-image"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <img
                src="/icons/edit.svg"
                alt="Edit"
                width={16}
                height={16}
                className="mr-1"
              />
              Edit
            </Link>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-primary shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="p-5 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Visi</h2>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-600">{content.vision}</p>
          </div>
          <div className="p-5 pt-0 mt-auto">
            <Link
              to="/admin/content/edit/vision"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <img
                src="/icons/edit.svg"
                alt="Edit"
                width={16}
                height={16}
                className="mr-1"
              />
              Edit
            </Link>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-primary shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="p-5 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Misi</h2>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-600">{content.mission}</p>
          </div>
          <div className="p-5 pt-0 mt-auto">
            <Link
              to="/admin/content/edit/mission"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <img
                src="/icons/edit.svg"
                alt="Edit"
                width={16}
                height={16}
                className="mr-1"
              />
              Edit
            </Link>
          </div>
        </div>

        {/* Office Location */}
        <div className="bg-primary shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="p-5 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Lokasi Kantor</h2>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-600">{content.office_location}</p>
          </div>
          <div className="p-5 pt-0 mt-auto">
            <Link
              to="/admin/content/edit/office-location"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <img
                src="/icons/edit.svg"
                alt="Edit"
                width={16}
                height={16}
                className="mr-1"
              />
              Edit
            </Link>
          </div>
        </div>

        {/* Company Email */}
        <div className="bg-primary shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="p-5 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Email Perusahaan</h2>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-600">{content.company_email}</p>
          </div>
          <div className="p-5 pt-0 mt-auto">
            <Link
              to="/admin/content/edit/company-email"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <img
                src="/icons/edit.svg"
                alt="Edit"
                width={16}
                height={16}
                className="mr-1"
              />
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentManagement;
