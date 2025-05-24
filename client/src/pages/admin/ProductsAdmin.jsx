import React, { useEffect, useState } from "react";
import ProductTable from "../../components/admin/ProductTable";
import FormProduct from "../../components/admin/FormProduct";
import { productService, categoryService } from "../../services";

function ProductsAdmin() {
  const [searchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    description: "",
    category_id: "",
    image_url: "",
    spec_image_url: "",
    created_at: "",
  });

  // Muat produk dan kategori saat halaman dimuat
  useEffect(() => {
    productService
      .getAllProducts()
      .then((res) => {
        setProducts(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil produk", err);
        setLoading(false);
      });

    categoryService
      .getAllCategories()
      .then((res) => {
        const names = ["All", ...res.data.map((c) => c.name)];
        setCategories(names);
      })
      .catch((err) => {
        console.error("Gagal ambil kategori", err);
      });
  }, []);

  // Filter produk berdasarkan pencarian dan kategori
  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(
      (p) => activeCategory === "All" || p.category?.name === activeCategory
    );

  // Buka modal tambah/edit produk
  const openAddModal = () => {
    setIsEditing(false);
    setCurrentProduct({
      name: "",
      description: "",
      category_id: "",
      image_url: "",
      spec_image_url: "",
      created_at: new Date().toISOString(),
    });
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    setShowModal(true);
  };

  // Hapus produk
  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      productService
        .deleteProduct(id)
        .then(() => {
          setProducts((prev) => prev.filter((p) => p.id !== id));
          alert("Produk berhasil dihapus.");
        })
        .catch((err) => {
          console.error("Gagal hapus produk:", err);
          alert("Gagal menghapus produk.");
        });
    }
  };

  // Simpan produk baru atau edit
  const handleSave = (formData) => {
    if (isEditing) {
      productService
        .updateProduct(currentProduct.id, formData)
        .then((res) => {
          setProducts((prev) =>
            prev.map((p) => (p.id === res.data.id ? res.data : p))
          );
          setShowModal(false);
        })
        .catch((err) => {
          console.error("Gagal perbarui produk:", err);
          alert("Gagal memperbarui produk.");
        });
    } else {
      productService
        .createProduct(formData)
        .then((res) => {
          setProducts((prev) => [...prev, res.data]);
          setShowModal(false);
        })
        .catch((err) => {
          console.error("Gagal tambah produk:", err);
          alert("Gagal menambahkan produk.");
        });
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-secondary">Kelola Produk</h1>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          <img src="/icons/plus.svg" alt="Add" width={18} height={18} />
          Tambah Produk
        </button>
      </div>

      {/* Tabs Kategori */}
      <div className="bg-primary shadow-sm rounded-lg p-4 mb-6 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 m-2 text-sm font-medium rounded-md whitespace-nowrap ${
              activeCategory === cat
                ? "bg-accent text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tabel Produk */}
      {!loading ? (
        <ProductTable
          products={filteredProducts}
          searchTerm={searchTerm}
          activeCategory={activeCategory}
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