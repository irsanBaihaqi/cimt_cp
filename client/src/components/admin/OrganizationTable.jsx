// client/src/components/admin/OrganizationTable.jsx
import React from "react";
import { Link } from "react-router-dom";

const OrganizationTable = ({ organizations, searchTerm }) => {
  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
      {/* Table Container with Horizontal Scroll */}
      <div className="overflow-x-auto max-h-[70vh] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-accent sticky top-0 z-10">
            <tr>
              {/* No */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider"
              >
                #
              </th>
              {/* Name */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider"
              >
                Name
              </th>
              {/* Position */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider"
              >
                Position
              </th>
              {/* Actions */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider flex justify-center"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {filteredOrganizations.length > 0 ? (
              filteredOrganizations.map((organization, index) => (
                <tr
                  key={organization.id}
                  className="hover:bg-primary/5 transition-colors duration-150"
                >
                  <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-secondary text-center">
                    {index + 1}
                  </td>
                  <td className="px-3 py-4 text-sm font-semibold text-secondary">
                    {organization.name}
                  </td>
                  <td className="px-3 py-4 text-sm font-semibold text-secondary">
                    {organization.position}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap space-x-2 flex justify-center">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        to={`/admin/organizations/edit/${organization.id}`}
                        className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        <img
                          src="/icons/edit.svg"
                          alt="Edit"
                          className="mr-1 w-3 h-3"
                        />
                        Edit
                      </Link>
                      <button className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200 cursor-pointer">
                        <img
                          src="/icons/delete.svg"
                          alt="Delete"
                          className="mr-1 w-3 h-3"
                        />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No organizations found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrganizationTable;
