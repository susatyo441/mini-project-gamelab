import React from 'react';

const VisionMissionSection = () => {
  return (
    <section className="bg-red-600">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-1 font-[Poppins] ">
            <h4 className="text-white font-bold text-center mb-4">
              <span className="border-b border-white inline-block text-[32px]">
                OUR VISION
              </span>
            </h4>
            <blockquote className="text-center text-white font-light mt-4 text-[18px]">
              <p>
                “ Menjadi Industri Produk Sambal Indonesia, yang terkemuka dan
                selalu terdepan dalam Kualitas dan Layanan. ”
              </p>
            </blockquote>
          </div>
          <div className="col-span-1 md:col-span-1 font-[Poppins] ">
            <h4 className="text-white font-bold text-center mb-4">
              <span className="border-b border-white inline-block  text-[32px]">
                OUR MISSION
              </span>
            </h4>
            <ul className="text-center text-white font-light mt-4">
              <li className="mb-3">
                Menerapkan jaminan mutu produk agar senantiasa menjadi produsen
                produk sambal yang terpercaya.
              </li>
              <li className="mb-3">
                Menerapkan sistem kemasan dan pelabelan sesuai peraturan dan
                harapan pelanggan.
              </li>
              <li>
                Memberikan pelayanan secara profesional demi terwujudnya
                kepuasan pelanggan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
