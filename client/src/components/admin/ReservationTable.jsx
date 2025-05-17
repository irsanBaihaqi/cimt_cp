// client/src/components/admin/ReservationTable.jsx
import React from "react";
import { Link } from "react-router-dom";

const ReservationTable = ({ reservations }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
      {/* Table Container with Horizontal Scroll */}
      <div className="overflow-x-auto max-h-[70vh] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-accent sticky top-0 z-10">
            <tr>
              

              {/* Email */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[200px]"
              >
                Email
              </th>

              {/* Phone */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[150px]"
              >
                Phone
              </th>

              {/* Notes */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[250px]"
              >
                Notes
              </th>

              {/* Requested Date */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[150px]"
              >
                Tanggal Permintaan
              </th>

              {/* Status */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[120px]"
              >
                Status
              </th>

              {/* Action */}
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[180px]"
              >
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {reservations.length > 0 ? (
              reservations.map((reservation, index) => (
                <tr
                  key={reservation.id || index}
                  className="hover:bg-primary/5 transition-colors duration-150"
                >
                  {/* Email */}
                  <td className="px-3 py-4 text-sm font-semibold text-secondary">
                    {reservation.email || "Tidak ada email"}
                  </td>

                  {/* Phone */}
                  <td className="px-3 py-4 text-sm text-gray-700">
                    {reservation.phone || "-"}
                  </td>

                  {/* Notes */}
                  <td className="px-3 py-4 text-sm text-gray-700">
                    {reservation.notes || "Tidak ada catatan"}
                  </td>

                  {/* Requested Date */}
                  <td className="px-3 py-4 text-sm text-gray-700">
                    {new Date(reservation.requested_date).toLocaleDateString(
                      "id-ID"
                    )}
                  </td>

                  {/* Status */}
                  <td className="px-3 py-4 text-sm">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        reservation.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : reservation.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {reservation.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-3 py-4 whitespace-nowrap space-x-2">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        to={`/admin/reservations/edit/${reservation.id}`}
                        className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        <img
                          src="/icons/edit.svg"
                          alt="Edit"
                          width={12}
                          height={12}
                          className="mr-1"
                        />
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Apakah Anda yakin menghapus reservasi ini?"
                            )
                          ) {
                            console.log("Hapus reservasi", reservation.id);
                          }
                        }}
                        className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                      >
                        <img
                          src="/icons/delete.svg"
                          alt="Delete"
                          width={12}
                          height={12}
                          className="mr-1"
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
                  colSpan="7"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  Tidak ada permintaan reservasi ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationTable;
