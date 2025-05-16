// client/src/pages/admin/OrganizationAdmin.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrganizationTable from "../../components/admin/OrganizationTable";

function OrganizationAdmin() {
  const [searchTerm, setSearchTerm] = useState("");

  const dummyOrganizations = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CTO",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "CFO",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "COO",
    },
  ];

  return (
    <div className="p-2">
      <div className="flex flex-col gap-6">
        {/* Header with title and search/add */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-secondary">
            Kelola Organisasi
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Cari anggota..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <img
                src="/icons/search.svg"
                alt="Search"
                width={18}
                height={18}
                className="absolute right-3 top-2.5 text-gray-500 pointer-events-none"
              />
            </div>

            <Link
              to="/admin/organizations/add"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
            >
              <img src="/icons/plus.svg" alt="Add" width={18} height={18} />
              Tambah Anggota
            </Link>
          </div>
        </div>

        {/* Organization Table */}
        <OrganizationTable
          organizations={dummyOrganizations}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
}

export default OrganizationAdmin;
