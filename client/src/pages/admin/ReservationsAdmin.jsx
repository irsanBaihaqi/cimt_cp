// client/src/pages/admin/ReservationAdmin.jsx
import React, { useState } from "react";
import ReservationTable from "../../components/admin/ReservationTable";

function ReservationAdmin() {
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy Data Reservasi
  const dummyReservations = [
    {
      id: 1,
      customer_name: "John Doe",
      email: "john.doe@example.com",
      phone: "+62 8123 4567",
      service_type: "Meeting",
      requested_date: "2025-04-05T10:00:00Z",
      status: "pending",
      notes: "Ingin bertemu terkait produk Crawler Crane.",
      created_at: "2025-04-01T09:00:00Z",
    },
    {
      id: 2,
      customer_name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+62 8989 0123",
      service_type: "Service",
      requested_date: "2025-04-06T14:00:00Z",
      status: "approved",
      notes: "Permintaan servis mesin bulanan.",
      created_at: "2025-04-02T10:00:00Z",
    },
    {
      id: 3,
      customer_name: "Michael Johnson",
      email: "michael.johnson@example.com",
      phone: "+62 8123 4444",
      service_type: "Demo Produk",
      requested_date: "2025-04-07T11:00:00Z",
      status: "rejected",
      notes: "Permintaan demo ditolak karena jadwal penuh.",
      created_at: "2025-04-03T12:00:00Z",
    },
  ];

  // Filter berdasarkan email atau nomor telepon
  const filteredReservations = dummyReservations.filter(
    (r) =>
      r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-2">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-secondary">
            Kelola Reservasi
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Cari email atau nomor telepon..."
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
          </div>
        </div>

        {/* Reservation Table */}
        <ReservationTable reservations={filteredReservations} />
      </div>
    </div>
  );
}

export default ReservationAdmin;
