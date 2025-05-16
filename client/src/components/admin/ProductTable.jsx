import React from "react";
import { Link } from "react-router-dom";

const ProductTable = ({ products, searchTerm, activeCategory }) => {
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        activeCategory === "All" || product.category === activeCategory
    );

  return (
    <div className="shadow-lg rounded-lg overflow-hidden border border-gray">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-accent">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider w-12">
                #
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[150px]">
                Name
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider hidden md:table-cell min-w-[200px]">
                Description
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider hidden sm:table-cell min-w-[120px]">
                Created At
              </th>
              <th className="px-3 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider min-w-[180px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
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
                    {product.createdAt}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap space-x-2">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        to={`/admin/products/edit/${product.id}`}
                        className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        <img
                          src="/icons/edit.svg"
                          alt="Edit"
                          className="mr-1 w-3 h-3"
                        />
                        Edit
                      </Link>
                      <button className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200 cursor-pointer">
                        <img
                          src="/icons/delete.svg"
                          alt="Delete"
                          className="mr-1 w-3 h-3"
                        />
                        Delete
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
                  No products found
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
