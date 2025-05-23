import React, { useState } from "react";

function FormProduct({ product, categories, onSave, onClose }) {
  const [formData, setFormData] = useState({
    name: product.name || "",
    description: product.description || "",
    category_id: product.category_id || "",
    image: product.image || null,
    spec_image: product.spec_image_url || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = async () => {
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        data.append(key, value);
      }
    });

    if (formData.image instanceof File) {
      data.append("image", formData.image);
    }

    if (formData.spec_image instanceof File) {
      data.append("spec", formData.spec_image);
    }

    const url = product.id ? `/api/products/${product.id}` : "/api/products";
    const method = product.id ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        body: data,
      });

      if (!response.ok) throw new Error("Gagal menyimpan produk");

      const result = await response.json();
      onSave(result);
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat menyimpan.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">
          {product.id ? "Edit" : "Tambah"} Produk
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Produk
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deskripsi
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kategori
            </label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              {categories.map((cat, idx) => (
                <option key={idx + 1} value={idx + 1}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gambar Produk
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md"
            />
            {formData.image && typeof formData.image !== "object" && (
              <img
                src={formData.image}
                alt="Preview"
                className="mt-2 h-24 object-cover rounded-md"
              />
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Spesifikasi Gambar
            </label>
            <input
              type="file"
              name="spec"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md"
            />
            {formData.spec_image && typeof formData.spec_image !== "object" && (
              <img
                src={formData.spec_image}
                alt="Spesifikasi"
                className="mt-2 h-24 object-cover rounded-md"
              />
            )}
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormProduct;
