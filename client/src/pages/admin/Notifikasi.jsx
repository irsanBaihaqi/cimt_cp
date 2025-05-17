// client/src/pages/admin/Notifikasi.jsx
import React from "react";
import { useState } from "react";

function Notifikasi() {
  // Dummy data untuk notifikasi
  const dummyNotifications = [
    {
      id: 1,
      email: "john.doe@example.com",
      phone: "+62 8123 4567",
      notes:
        "Saya tertarik dengan produk Crawler Crane. Mohon jadwalkan pertemuan.",
      status: "pending",
    },
    {
      id: 2,
      email: "jane.smith@example.com",
      phone: "+62 8989 0123",
      notes: "Ingin bertanya lebih lanjut tentang Shot Blasting Machine.",
      status: "pending",
    },
  ];

  const [notifications, setNotifications] = useState(dummyNotifications);
  const [showConfirm, setShowConfirm] = useState(null); // Menyimpan ID notif yang akan dihapus

  const handleApprove = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, status: "approved" } : notif
      )
    );
    alert(`Notifikasi ${id} disetujui.`);
  };

  const handleDelete = (id) => {
    setShowConfirm(id);
  };

  const confirmDelete = () => {
    setNotifications((prev) =>
      prev.filter((notif) => notif.id !== showConfirm)
    );
    setShowConfirm(null);
    alert("Notifikasi dibatalkan.");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Daftar Notifikasi
      </h1>

      {notifications.length === 0 && (
        <div className="text-center py-10 bg-white rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-500">Tidak ada notifikasi saat ini.</p>
        </div>
      )}

      {notifications.map((notif) => (
        <div
          key={notif.id}
          className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200 relative"
        >
          {/* Header Email & Phone */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">Email:</p>
              <p className="font-semibold">{notif.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone:</p>
              <p className="font-semibold">{notif.phone}</p>
            </div>
          </div>

          {/* Notes / Pesan */}
          <div className="mb-6">
            <p className="text-sm text-gray-500">Notes:</p>
            <p className="mt-1 text-gray-700">{notif.notes}</p>
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-end gap-3">
            <button
              onClick={() => handleApprove(notif.id)}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-200"
            >
              Approve
            </button>
            <button
              onClick={() => handleDelete(notif.id)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200"
            >
              Delete
            </button>
          </div>

          {/* Modal Konfirmasi Hapus */}
          {showConfirm === notif.id && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-20">
              <div className="bg-white rounded-lg p-6 w-full max-w-sm mx-4 shadow-lg">
                <h2 className="text-lg font-semibold mb-4">
                  Konfirmasi Penghapusan
                </h2>
                <p className="mb-6 text-sm text-gray-600">
                  Apakah Anda yakin ingin menghapus notifikasi ini?
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowConfirm(null)}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors duration-200"
                  >
                    Batal
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200"
                  >
                    Ya, Hapus
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Notifikasi;