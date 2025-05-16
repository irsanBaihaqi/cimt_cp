// client/src/pages/admin/BlogAdmin.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogTable from "../../components/admin/BlogTable";

function BlogAdmin() {
  const [searchTerm, setSearchTerm] = useState("");

  const dummyBlogs = [
    {
      id: 1,
      title: "Mengenal Teknologi Mesin Terbaru",
      slug: "mengenal-teknologi-mesin-terbaru",
      thumbnail_url: "",
      is_published: true,
      published_at: "2025-04-05T10:00:00Z",
      created_at: "2025-04-01T09:00:00Z",
      updated_at: "2025-04-04T15:00:00Z",
    },
    {
      id: 2,
      title: "Perkembangan Industri Maritim",
      slug: "perkembangan-industri-maritim",
      thumbnail_url: "",
      is_published: false,
      published_at: null,
      created_at: "2025-04-02T12:00:00Z",
      updated_at: "2025-04-03T14:00:00Z",
    },
    {
      id: 3,
      title: "Teknologi Crane Modern",
      slug: "teknologi-crane-modern",
      thumbnail_url: "",
      is_published: true,
      published_at: "2025-04-03T08:00:00Z",
      created_at: "2025-04-01T09:00:00Z",
      updated_at: "2025-04-03T08:00:00Z",
    },
    {
      id: 4,
      title: "Teknologi Crane Modern",
      slug: "teknologi-crane-modern",
      thumbnail_url: "",
      is_published: true,
      published_at: "2025-04-03T08:00:00Z",
      created_at: "2025-04-01T09:00:00Z",
      updated_at: "2025-04-03T08:00:00Z",
    },
    {
      id: 5,
      title: "Teknologi Crane Modern",
      slug: "teknologi-crane-modern",
      thumbnail_url: "",
      is_published: true,
      published_at: "2025-04-03T08:00:00Z",
      created_at: "2025-04-01T09:00:00Z",
      updated_at: "2025-04-03T08:00:00Z",
    },
  ];

  const filteredBlogs = dummyBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-secondary">Kelola Blog</h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Cari judul atau slug..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <img
              src="/icons/search.svg"
              alt="Search"
              width={18}
              height={18}
              className="absolute right-3 top-2.5 text-gray-500 pointer-events-none"
            />
          </div>

          {/* Add Button */}
          <Link
            to="/admin/blogs/add"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
          >
            <img src="/icons/plus.svg" alt="Add" width={18} height={18} />
            Tambah Artikel
          </Link>
        </div>
      </div>

      {/* Table Component */}
      <BlogTable blogs={filteredBlogs} searchTerm={searchTerm} />
    </div>
  );
}

export default BlogAdmin;
