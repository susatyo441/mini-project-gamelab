import React from 'react';

const Product = ({
  id,
  productName,
  description,
  price,
  gambar,
  labelImages,
}) => {
  const handleOrderClick = () => {
    const phoneNumber = '6289531728616';
    const message = `Halo, saya ingin memesan ${productName}.`;

    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`,
      '_blank'
    );
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4">
      <img className="w-full" src={gambar} alt={productName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base mt-2">
          Price: Rp {price.toLocaleString()}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <div className="d-flex label-products">
          {labelImages &&
            labelImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`label-${index}`}
                className="mr-2"
              />
            ))}
        </div>
        <button
          onClick={handleOrderClick}
          className="border-0 bg-red-600 hover:bg-red-800 text-white px-4 py-1 rounded-[50px]"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Product;
