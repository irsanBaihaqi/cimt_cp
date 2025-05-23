import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductTable from "../../components/admin/ProductTable";
import FormProduct from "../../components/admin/FormProduct";

function ProductsAdmin() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    description: "",
    category_id: "",
    image: "",
    spec_image_url: "",
  });

  // Load data dari API
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        const names = ["All", ...data.map((c) => c.name)];
        setCategories(names);
      });
  }, []);

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  // Open modal untuk tambah/edit
  const openAddModal = () => {
    setIsEditing(false);
    setCurrentProduct({
      name: "",
      description: "",
      category_id: "",
      image: "",
      spec_image_url: "",
    });
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setIsEditing(true);
    setCurrentProduct({ ...product });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      fetch(`/api/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            setProducts((prev) => prev.filter((p) => p.id !== id));
            alert("Produk berhasil dihapus");
          } else {
            alert("Gagal menghapus produk");
          }
        })
        .catch(() => alert("Terjadi kesalahan"));
    }
  };

  const handleSave = (updatedProduct) => {
    if (isEditing) {
      setProducts((prev) =>
        prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
      );
    } else {
      setProducts((prev) => [...prev, updatedProduct]);
    }
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-secondary">Kelola Produk</h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Cari produk..."
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

          <button
            onClick={openAddModal}
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
          >
            <img src="/icons/plus.svg" alt="Add" width={18} height={18} />
            Tambah Produk
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-primary shadow-sm rounded-lg p-4 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 m-2 text-sm font-medium rounded-md cursor-pointer transition-colors duration-200 ${
              activeCategory === category
                ? "bg-accent text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tabel Produk */}
      {!loading ? (
        <ProductTable
          products={filteredProducts}
          onEdit={openEditModal}
          onDelete={handleDelete}
        />
      ) : (
        <div className="text-center py-10">Memuat produk...</div>
      )}

      {/* Modal Form */}
      {showModal && (
        <FormProduct
          product={currentProduct}
          categories={categories.filter((c) => c !== "All")}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default ProductsAdmin;