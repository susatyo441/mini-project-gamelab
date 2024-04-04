import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full pt-20 pb-10 mt-10 mb-7">
      <div className="h-full w-full">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center align-middle mb-10 md:mb-0">
            <div className="w-3/4 h-full">
              <img
                className="w-full"
                width="100%"
                src="./images/hero-ibu.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="w-3/4 h-full">
              <h1 className="text-5xl md:text-6xl mb-4 font-[Licorice] font-bold text-[72px] text-center md:text-left">
                Bagindo Sambal Story
              </h1>
              <div className="text-xl md:text-2xl mb-7 h-[400px] overflow-y-scroll text-justify font-[Poppins] font-reguler text-sm font-light tracking-tighter">
                <p className="font-bold">
                  DARI HOBI SAMBAL HINGGA MERAUP KEBERHASILAN BISNIS GLOBAL
                </p>
                <p>
                  Bagindo, seorang guru SD yang telah mengajar selama 15 tahun,
                  memutuskan untuk mengubah arah hidupnya setelah merasa
                  terinspirasi dari hobi memasak dan cinta akan rasa pedas.
                  Suatu hari, saat menghadiri acara keluarga, dia menyadari
                  betapa populer dan dicintainya sambal di kalangan masyarakat
                  Indonesia, termasuk di keluarganya sendiri.
                </p>
                <br />
                <p>
                  Bagindo memutuskan untuk memulai bisnis sambal kecil-kecilan
                  dari dapur rumahnya. Dengan modal uang tabungan dan bantuan
                  resep dari neneknya, dia membeli beberapa kilogram cabe,
                  bawang merah, bawang putih, dan ikan teri. Dengan semangat dan
                  dedikasi, Bagindo mulai membuat sambal di rumah dan menjualnya
                  kepada teman-teman dan kerabat.
                </p>
                <br />
                <p>
                  Berkat kualitas rasa yang autentik dan kemasan yang menarik,
                  sambal buatannya cepat mendapatkan perhatian dan mendapat
                  respon positif. Teman-teman kerjanya bahkan mulai memesan
                  dalam jumlah besar untuk dijual kembali. Bagindo yang awalnya
                  hanya memasak di rumah, kini mulai sibuk mengemas dan mengirim
                  pesanan dari berbagai tempat.
                </p>
                <br />
                <p>
                  Melihat permintaan yang terus meningkat, Bagindo memutuskan
                  untuk mengambil langkah besar dengan mengundurkan diri dari
                  pekerjaannya sebagai guru untuk fokus pada bisnis sambalnya.
                  Pada tahun 2012, "Sambal Bagindo" secara resmi didirikan. Pada
                  tahun berikutnya, perusahaan ini berkembang pesat dan
                  memperluas produksi dengan membuka pabrik di kawasan industri
                  setempat.
                </p>
                <br />
                <p>
                  "Sambal Bagindo" tidak hanya sukses di pasar domestik, tetapi
                  juga mulai mendapatkan perhatian internasional. Produknya
                  berhasil menembus pasar Amerika dan mendapatkan pengakuan dari
                  Food and Drug Administration (FDA) AS. Selain Amerika, sambal
                  Bagindo juga diekspor ke negara-negara lain seperti Australia,
                  Singapura, dan Malaysia.
                </p>
                <br />
                <p>
                  Bagindo tidak hanya fokus pada kualitas produk, tetapi juga
                  pada standar keamanan dan kehalalan. Produknya telah
                  mendapatkan sertifikasi ISO 9001:2015, HACCP, dan Halal. Dia
                  juga aktif dalam pelatihan sumber daya manusia dan kerjasama
                  dengan berbagai pihak untuk mempromosikan produknya.
                </p>
              </div>
              <a
                href="/products"
                className="mt-2 border-0 bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded-[50px] block w-full md:w-auto md:inline-block text-center"
              >
                Check Our Menu!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
