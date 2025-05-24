import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

function Dashboard() {
  // Data for weekly reservation chart
  const weeklyReservationData = [
    { name: "Senin", contacts: 12, meetings: 8 },
    { name: "Selasa", contacts: 19, meetings: 11 },
    { name: "Rabu", contacts: 15, meetings: 9 },
    { name: "Kamis", contacts: 18, meetings: 13 },
    { name: "Jumat", contacts: 14, meetings: 10 },
    { name: "Sabtu", contacts: 8, meetings: 5 },
    { name: "Minggu", contacts: 5, meetings: 2 },
  ];

  return (
    <div className="p-6 bg-gray-100">
      {/* Header */}
      <h1 className="text-2xl font-bold text-secondary mb-4">
        Admin Dashboard
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        Selamat datang di panel administrasi PT CIMT
      </p>

      {/* Grid Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Produk" value={25} color="bg-blue-600" />
        <StatCard title="Anggota" value={12} color="bg-green-600" />
        <StatCard title="Blog" value={9} color="bg-yellow-500" />
        <StatCard title="Reservasi" value={7} color="bg-purple-600" />
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Kiri: Grafik & Produk */}
        <div className="lg:col-span-2 space-y-6">
          {/* Grafik Reservasi Mingguan */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-secondary">
                Aktivitas Reservasi Minggu Ini
              </h2>
              <div className="flex space-x-2">
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  Kontak:{" "}
                  {weeklyReservationData.reduce(
                    (sum, day) => sum + day.contacts,
                    0
                  )}
                </span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  Meeting:{" "}
                  {weeklyReservationData.reduce(
                    (sum, day) => sum + (day.meetings || 0),
                    0
                  )}
                </span>
              </div>
            </div>
            <div className="p-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weeklyReservationData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="contacts"
                    stackId="1"
                    stroke="#3b82f6"
                    fill="#93c5fd"
                    name="Kontak"
                  />
                  <Area
                    type="monotone"
                    dataKey="meetings"
                    stackId="2"
                    stroke="#10b981"
                    fill="#6ee7b7"
                    name="Meeting"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Produk Terbaru */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-secondary">
                Produk Terbaru
              </h2>
              <Link
                to="/admin/products"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Lihat Semua →
              </Link>
            </div>
            <ProductTablePreview />
          </div>
        </div>

        {/* Kolom Kanan: Profil Admin, Notifikasi */}
        <aside className="space-y-6">
          {/* Admin Profile Card */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-center">
            <img
              src="/images/adminimg.png"
              alt="Admin Avatar"
              className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-gray-300"
            />
            <h3 className="mt-4 font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">johndoe@example.com</p>
            <button className="mt-3 text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Edit Profil
            </button>
          </div>

          {/* Notifikasi Terbaru */}
          <div className="bg-indigo-50 shadow-md rounded-lg overflow-hidden border border-indigo-100">
            <div className="px-6 py-4 border-b border-indigo-100">
              <h2 className="text-lg font-semibold text-indigo-800">
                Notifikasi
              </h2>
            </div>
            <NotificationListPreview />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Dashboard;

// Statistik Card Component
function StatCard({ title, value, color }) {
  return (
    <div className={`rounded-lg p-4 ${color} text-white shadow-md`}>
      <h2 className="text-3xl font-regular">{value}</h2>
      <p className="text-md mt-1 opacity-80">{title}</p>
    </div>
  );
}

// Dummy Table Produk
function ProductTablePreview() {
  const dummyProducts = [
    {
      id: 1,
      name: "Crawler Crane",
      category: "Engineering Machinery",
      createdAt: "2025-04-01",
    },
    {
      id: 2,
      name: "Shot Blasting Machine",
      category: "Plate Pretreatment",
      createdAt: "2025-04-03",
    },
    {
      id: 3,
      name: "Oil Tanker",
      category: "Marine Products",
      createdAt: "2025-04-05",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Nama Produk
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Kategori
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Dibuat Pada
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dummyProducts.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.createdAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Dummy Table Reservasi
function ReservationTablePreview() {
  const dummyReservations = [
    { id: 1, customer: "John Doe", service: "Meeting", date: "2025-04-01" },
    {
      id: 2,
      customer: "Jane Smith",
      service: "Demo Produk",
      date: "2025-04-03",
    },
    {
      id: 3,
      customer: "Michael Johnson",
      service: "Technical Support",
      date: "2025-04-05",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Customer
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Jenis Layanan
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Tanggal Permintaan
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dummyReservations.map((res) => (
            <tr
              key={res.id}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {res.customer}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {res.service}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {res.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Dummy Table Blog
function BlogTablePreview() {
  const dummyBlogs = [
    {
      id: 1,
      title: "Mengenal Teknologi Mesin Terbaru",
      slug: "teknologi-mesin-terbaru",
      is_published: true,
      created_at: "2025-04-01",
    },
    {
      id: 2,
      title: "Perkembangan Industri Maritim",
      slug: "perkembangan-industri-maritim",
      is_published: true,
      created_at: "2025-04-03",
    },
    {
      id: 3,
      title: "Draft: Teknologi Crane Modern",
      slug: "crane-modern",
      is_published: false,
      created_at: "2025-04-05",
    },
  ];

  const publishedBlogs = dummyBlogs.filter((blog) => blog.is_published);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Judul
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Slug
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {publishedBlogs.length > 0 ? (
            publishedBlogs.map((blog) => (
              <tr
                key={blog.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {blog.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {blog.slug}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      blog.is_published
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {blog.is_published ? "Published" : "Draft"}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="px-6 py-4 text-center text-sm text-gray-400"
              >
                Tidak ada blog yang dipublish.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// Dummy List Notifikasi
function NotificationListPreview() {
  const notifications = [
    {
      id: 1,
      message: "Permintaan janji temu dari John Doe",
      time: "10 menit lalu",
    },
    {
      id: 2,
      message: "Pertanyaan baru tentang Shot Blasting Machine",
      time: "30 menit lalu",
    },
    {
      id: 3,
      message: "Blog draft siap diterbitkan",
      time: "1 jam lalu",
    },
  ];

  return (
    <div className="divide-y divide-gray-200 max-h-40 overflow-y-auto px-6 py-4">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className="py-3 hover:bg-indigo-100 cursor-pointer transition-colors duration-150"
        >
          <div className="flex justify-between">
            <p className="font-medium text-indigo-800">{notif.message}</p>
            <span className="text-xs text-gray-400">{notif.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}