import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Ganti dengan jumlah produk yang ingin ditampilkan per halaman

  // Menghitung indeks produk yang akan ditampilkan
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Mengatur jumlah halaman
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-[Licorice] font-bold text-[72px] text-center">
        Daftar Produk
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {currentProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            productName={product.product_name}
            description={product.description}
            price={product.price}
            gambar={product.gambar}
            labelImages={product.label_images}
            productLink={`/products/${product.id}`}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`mx-1 px-4 py-2 ${
              currentPage === number ? 'bg-red-500 text-white' : 'bg-red-200'
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
