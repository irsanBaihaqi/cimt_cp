import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductTable from "../../components/admin/ProductTable";

function ProductsAdmin() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Engineering",
    "Plate pretreatment",
    "Marine products",
    "Machine series",
    "Welding and cutting",
  ];

  const dummyProducts = [
    {
      id: 1,
      name: "Crawler Crane",
      description: "Heavy duty crane for construction sites",
      createdAt: "2025-04-01",
      image: "/images/products/crawler-crane.jpg",
      category: "Engineering",
    },
    {
      id: 2,
      name: "Shot Blasting Machine",
      description: "Surface treatment machine for metal plates",
      createdAt: "2025-04-03",
      image: "/images/products/shot-blasting-machine.jpg",
      category: "Plate pretreatment",
    },
    {
      id: 3,
      name: "Oil Tanker",
      description: "Marine product for oil transportation",
      createdAt: "2025-04-05",
      image: "/images/products/oil-tanker.jpg",
      category: "Marine products",
    },
    {
      id: 4,
      name: "Welding Machine",
      description: "Industrial welding equipment",
      createdAt: "2025-04-07",
      image: "/images/products/welding-machine.jpg",
      category: "Welding and cutting",
    },
  ];

  return (
      <div className="flex flex-col gap-6">
        {/* Header with title and search/add */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-secondary">Kelola Produk</h1>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Cari produk..."
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
              to="/admin/products/add"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
            >
              <img src="/icons/plus.svg" alt="Add" width={18} height={18} />
              Tambah Produk
            </Link>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="bg-primary shadow-sm rounded-lg p-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 m-2 text-sm font-medium rounded-md whitespace-nowrap cursor-pointer transition-colors duration-200 ring ring-gray ${
                  activeCategory === category
                    ? "bg-accent text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
        </div>

        {/* Product Table */}
        <ProductTable
          products={dummyProducts}
          searchTerm={searchTerm}
          activeCategory={activeCategory}
        />
      </div>
  );
}

export default ProductsAdmin;