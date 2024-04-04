import React, { useEffect } from 'react'
import ProductList from '../components/product/ProductList'
import axios from 'axios'

const Products = () => {
  axios.get('')
  const dummyProducts = [
    {
      id: 1,
      product_name: 'Produk 1',
      description: 'Deskripsi produk 1',
      price: 100000,
      gambar: './images/dummy.jpg',
    },
    {
      id: 2,
      product_name: 'Produk 2',
      description: 'Deskripsi produk 2',
      price: 150000,
      gambar: './images/dummy.jpg',
    },
    {
      id: 3,
      product_name: 'Produk 3',
      description: 'Deskripsi produk 3',
      price: 200000,
      gambar: './images/dummy.jpg',
    },
    {
      id: 4,
      product_name: 'Produk 4',
      description: 'Deskripsi produk 4',
      price: 200000,
      gambar: './images/dummy.jpg',
    },
    {
      id: 5,
      product_name: 'Produk 5',
      description: 'Deskripsi produk 5',
      price: 200000,
      gambar: './images/dummy.jpg',
    },
    {
      id: 6,
      product_name: 'Produk 6',
      description: 'Deskripsi produk 6',
      price: 200000,
      gambar: './images/dummy.jpg',
    },
    {
      id: 7,
      product_name: 'Produk 7',
      description: 'Deskripsi produk 7',
      price: 200000,
      gambar: './images/dummy.jpg',
    },
    {
      id: 8,
      product_name: 'Produk 8',
      description: 'Deskripsi produk 8',
      price: 200000,
      gambar: './images/dummy.jpg',
    },
    {
      id: 9,
      product_name: 'Produk 9',
      description: 'Deskripsi produk 9',
      price: 200000,
      gambar: './images/dummy.jpg',
    },
  ];

  useEffect(() => {
    
  }, [])

  return (
    <div className="h-full mx-auto mt-20">
      <ProductList products={dummyProducts} />
    </div>
  );
};

export default Products;
