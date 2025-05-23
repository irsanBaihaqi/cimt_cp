// client/src/pages/admin/Notifikasi.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Notifikasi() {
  // Dummy data notifikasi
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
  const [selected, setSelected] = useState([]);
  const [showConfirm, setShowConfirm] = useState(null);

  // Toggle checkbox per notifikasi
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Pilih Semua / Hapus Semua
  const toggleSelectAll = () => {
    if (selected.length === notifications.length) {
      setSelected([]);
    } else {
      setSelected(notifications.map((n) => n.id));
    }
  };

  // Hapus satu notifikasi
  const handleDelete = (id) => {
    setShowConfirm(id);
  };

  // Hapus semua notifikasi terpilih
  const confirmDeleteSelected = () => {
    setNotifications((prev) =>
      prev.filter((notif) => !selected.includes(notif.id))
    );
    setSelected([]);
    setShowConfirm(null);
    alert("Beberapa notifikasi telah dihapus.");
  };

  const confirmDeleteSingle = () => {
    setNotifications((prev) =>
      prev.filter((notif) => notif.id !== showConfirm)
    );
    setShowConfirm(null);
    alert("Notifikasi dihapus.");
  };
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Daftar Notifikasi
      </h1>

      {/* Tombol Select All */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={
              selected.length === notifications.length &&
              notifications.length > 0
            }
            onChange={toggleSelectAll}
            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-600">
            Pilih Semua ({selected.length} dipilih)
          </span>
        </div>

        {selected.length > 0 && (
          <button
            onClick={() => setShowConfirm("all")}
            className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-colors duration-200"
          >
            Hapus Terpilih
          </button>
        )}
      </div>

      {/* Tidak Ada Notifikasi */}
      {notifications.length === 0 && (
        <div className="text-center py-10 bg-white rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-500">Tidak ada notifikasi saat ini.</p>
        </div>
      )}

      {/* Daftar Notifikasi */}
      <div className="space-y-6">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200 relative transition-transform hover:shadow-lg duration-200 transform hover:-translate-y-1"
          >
            {/* Checkbox & Email + Phone */}
            <div className="absolute top-6 right-6 flex items-center">
              <input
                type="checkbox"
                checked={selected.includes(notif.id)}
                onChange={() => toggleSelect(notif.id)}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue"
              />
            </div>

            <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Email:</p>
                <div className="flex items-center gap-2">
                  <Link
                    to={`mailto:${notif.email}`}
                    className="font-semibold text-blue-600 hover:text-blue-800 underline"
                  >
                    {notif.email}
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone:</p>
                <p className="font-medium">{notif.phone}</p>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-6">
              <p className="text-sm text-gray-500">Notes:</p>
              <p className="mt-1 text-gray-700">{notif.notes}</p>
            </div>

            {/* Aksi */}
            <div className="flex justify-end gap-3 mt-4">
              <a href="cimtjkt@gmail.com"
                className="text-blue hover:text-blue cursor-pointer"
              >
                Lihat
              </a>
              <button
                onClick={() => handleDelete(notif.id)}
                className="text-red hover:text-red cursor-pointer"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Konfirmasi Hapus */}
      {showConfirm && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-auto shadow-lg animate-fade-in">
            <h2 className="text-lg font-semibold mb-4">
              Konfirmasi Penghapusan
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              {showConfirm === "all"
                ? "Apakah Anda yakin ingin menghapus semua notifikasi yang dipilih?"
                : "Apakah Anda yakin ingin menghapus notifikasi ini?"}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(null)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors duration-200"
              >
                Batal
              </button>
              <button
                onClick={
                  showConfirm === "all"
                    ? confirmDeleteSelected
                    : confirmDeleteSingle
                }
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifikasi;
