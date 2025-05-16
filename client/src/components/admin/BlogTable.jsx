// client/src/components/admin/BlogTable.jsx
import React from "react";
import { Link } from "react-router-dom";

const BlogTable = ({ blogs, searchTerm }) => {
  const filtered = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
      {/* Table Container with Horizontal Scroll */}
      <div className="overflow-x-auto max-h-[70vh] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-accent sticky top-0 z-10">
            <tr>

              {/* Title */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[200px]"
              >
                Judul
              </th>

              {/* Thumbnail */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[120px]"
              >
                Thumbnail
              </th>

              {/* Slug */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[180px]"
              >
                Slug
              </th>

              {/* Status */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[100px]"
              >
                Status
              </th>

              {/* Actions */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[180px]"
              >
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {filtered.length > 0 ? (
              filtered.map((blog) => (
                <tr
                  key={blog.id}
                  className="hover:bg-primary/5 transition-colors duration-150"
                >
              

                  {/* Title */}
                  <td className="px-3 py-4 text-sm font-semibold text-secondary">
                    {blog.title}
                  </td>

                  {/* Thumbnail */}
                  <td className="px-3 py-4 text-sm">
                    <img
                      src={blog.thumbnail_url}
                      alt={blog.title}
                      className="w-16 h-10 object-cover rounded"
                    />
                  </td>

                  {/* Slug */}
                  <td className="px-3 py-4 text-sm text-gray-700">
                    {blog.slug}
                  </td>

                  {/* Status Publish */}
                  <td className="px-3 py-4 text-sm">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        blog.is_published
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {blog.is_published ? "Published" : "Draft"}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-3 py-4 whitespace-nowrap space-x-2">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        to={`/admin/blogs/edit/${blog.id}`}
                        className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        <img
                          src="/icons/edit.svg"
                          alt="Edit"
                          className="mr-1 w-3 h-3"
                        />
                        Edit
                      </Link>
                      <button className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 cursor-pointer">
                        <img
                          src="/icons/delete.svg"
                          alt="Delete"
                          className="mr-1 w-3 h-3"
                        />
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  Tidak ada artikel ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable;