import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-600 min-h-48 mt-1">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-white text-2xl font-bold">Sambal Bagindo</h3>
          <p className="text-white text-sm mt-2">
            Menginspirasi dengan sambal terbaik.
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h4 className="text-white font-semibold mb-2">Navigasi</h4>
            <ul className="text-white text-sm">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-gray-300">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-300">
                  Produk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Sosial Media</h4>
            <ul className="text-white text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-red-700 py-2">
        <p className="text-center text-white text-sm">
          © 2024 Sambal Bagindo. Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
