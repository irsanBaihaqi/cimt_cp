// client/src/components/admin/ProductTable.jsx
import React from "react";

const ProductTable = ({
  products,
  searchTerm,
  activeCategory,
  onEdit,
  onDelete,
}) => {
  const filtered = products
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(
      (p) => activeCategory === "All" || p.category?.name === activeCategory
    );

  return (
    <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-accent sticky top-0 z-10">
            <tr>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider w-12"
              >
                #
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[150px]"
              >
                Nama
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider hidden md:table-cell min-w-[200px]"
              >
                Deskripsi
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider hidden sm:table-cell min-w-[120px]"
              >
                Tanggal Dibuat
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[180px]"
              >
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filtered.length > 0 ? (
              filtered.map((product, index) => (
                <tr
                  key={product.id}
                  className="hover:bg-primary/5 transition-colors duration-150"
                >
                  <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-secondary text-center">
                    {index + 1}
                  </td>
                  <td className="px-3 py-4 text-sm font-semibold text-secondary">
                    {product.name}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-700 hidden md:table-cell">
                    {product.description}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700 hidden sm:table-cell">
                    {new Date(product.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap space-x-2">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => onEdit(product)}
                        className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        <img
                          src="/icons/edit.svg"
                          alt="Edit"
                          className="mr-1 w-3 h-3"
                        />
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(product.id)}
                        className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                      >
                        <img
                          src="/icons/delete.svg"
                          alt="Hapus"
                          className="mr-1 w-3 h-3"
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
                  Tidak ada produk ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;