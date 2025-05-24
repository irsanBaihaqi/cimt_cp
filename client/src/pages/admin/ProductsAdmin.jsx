import React, { useEffect, useState } from "react";
import ProductTable from "../../components/admin/ProductTable";
import FormProduct from "../../components/admin/FormProduct";
import { productService, categoryService } from "../../services";

function ProductsAdmin() {
  const [searchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Muat produk dan kategori saat halaman dimuat
  useEffect(() => {
    productService
      .getAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => setProducts([]));

    categoryService
      .getAllCategories()
      .then((res) => {
        const names = ["All", ...res.data.map((c) => c.name)];
        setCategories(names);
      })
      .catch(() => setCategories(["All"]));
  }, []);

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(
      (p) => activeCategory === "All" || p.category?.name === activeCategory
    );

  const openAddModal = () => {
    setIsEditing(false);
    setCurrentProduct({
      name: "",
      description: "",
      category_id: "",
      image_url: "",
      spec_image_url: "",
    });
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      productService
        .deleteProduct(id)
        .then(() => {
          setProducts((prev) => prev.filter((p) => p.id !== id));
          alert("Produk berhasil dihapus.");
        })
        .catch(() => {
          alert("Gagal menghapus produk.");
        });
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
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 m-2 text-sm font-medium rounded-md whitespace-nowrap ${
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
      <ProductTable
        products={filteredProducts}
        searchTerm={searchTerm}
        activeCategory={activeCategory}
        onEdit={openEditModal}
        onDelete={handleDelete}
      />

      {/* Modal Form */}
      {showModal && (
        <FormProduct
          product={currentProduct}
          categories={categories.filter((c) => c !== "All")}
          onSave={(data) => {
            if (isEditing) {
              productService
                .updateProduct(currentProduct.id, data)
                .then((res) => handleSave(res.data));
            } else {
              productService
                .createProduct(data)
                .then((res) => handleSave(res.data));
            }
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default ProductsAdmin;
