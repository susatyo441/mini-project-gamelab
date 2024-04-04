import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import Product from './Product';

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams()
  const productsPerPage = 8; // Ganti dengan jumlah produk yang ingin ditampilkan per halaman
  const totalPage = Math.ceil(products.length / productsPerPage)

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

  const onNextPressed = () => {
    setCurrentPage(currentPage + 1)
  }
  const onPrevPressed = () => {
    setCurrentPage(currentPage - 1)
  }
  const onLastPagePressed = () => {
    setCurrentPage(totalPage)
  }
  const onFirstPagePressed = () => {
    setCurrentPage(1)
  }

  const onPagePressed = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    if (searchParams.get('page') <= totalPage) {
      setCurrentPage(searchParams.get('page') ?? 1)
    } else {
      setCurrentPage(1)
    }
  }, [])

  useEffect(() => {
    setSearchParams({page: currentPage})
  }, [currentPage])

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
            gambar={window.baseAPI + '/uploads/' + product.gambar}
            labelImages={product.label_images}
            productLink={`/products/${product.id}`}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {/* Kode ini intinya biar pagination enak aja gitu, maksimal nomer page yg muncul itu ada 5, jadi misal
        total page ada 50, kamu ada di page 25, yang dirender nanti tombol page 23 24 [25] 26 27. Intinya cuma
        ngerender 2 angka dibelakang dan didepan page yang sekarang. Tapi kalo 2 didepan ato dibelakang ga ada
        ya gini
        [1] 2  3  4   5
        46 47 48 49 [50]*/}
        {currentPage > 1 ? (
          <>
            <button
              onClick={onFirstPagePressed}
              className={`mx-1 px-4 py-2 bg-red-500 text-white`}>
              <i className='bi bi-chevron-double-left h-5 w-5 text-black'></i>
            </button>
            <button
              onClick={onPrevPressed}
              className={`mx-1 px-4 py-2 bg-red-500 text-white`}>
              <i className='bi bi-chevron-left h-5 w-5 text-black'></i>
            </button>
          </>
        ) : ('')}
        {(() => {
          let startPosition = currentPage - 3
          while (startPosition < 0) {
            startPosition += 1
          }
          while (startPosition + 5 > totalPage) {
            startPosition -= 1
          }
          const elements = []
          for (let i = startPosition; i < startPosition + 5; i++) {
            if (i < 0)
              continue
            if (i + 1 == currentPage) {
              elements.push(
                <button
                  onClick={() => onPagePressed(i + 1)}
                  className={`mx-1 px-4 py-2 bg-red-500 text-white`}
                >{i + 1}</button>
              )
            }
            else {
              elements.push(
                <button
                  onClick={() => onPagePressed(i + 1)}
                  className={`mx-1 px-4 py-2 bg-red-200`}
                >{i + 1}</button>
              )
            }
          }
          return elements
        })()}

        {currentPage < totalPage ? (
          <>
            <button
              onClick={onNextPressed}
              className={`mx-1 px-4 py-2 bg-red-500 text-white`}>
              <i className='bi bi-chevron-right h-5 w-5 text-black'></i>
            </button>
            <button
              onClick={onLastPagePressed}
              className={`mx-1 px-4 py-2 bg-red-500 text-white`}>
              <i className='bi bi-chevron-double-right h-5 w-5 text-black'></i>
            </button>
          </>) : ''}
      </div>
    </div>
  );
};

export default ProductList;
