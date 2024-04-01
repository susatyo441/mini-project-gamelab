import React from 'react'
import Navbar from '../components/Navbar'

const Landing = () => {
    return (
        <div className='main w-full'>
            <section className="w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
                <img className='w-full h-full' src="./images/header.jpg" alt="" />
                <div className="absolute bottom-20 left-20 font-[Handlee] font-black text-white text-3xl">Tak lengkap rasanya pecel tanpa Sambel Bagindo!</div>
            </section>
            <section className='w-full pt-20 pb-10'>
                <div className="h-full w-full">
                    <div className="flex flex-row justify-center">
                        <div className='w-1/2 h-full flex flex-col items-end justify-center '>
                            <div className="w-3/4 h-full text-justify font-[Poppins] text-sm font-light align-middle">
                                <img src="./images/logo.png" alt="" />
                                <p>Selamat datang dalam dunia cita rasa yang memikat, di mana setiap sajian pecel menjadi sebuah petualangan rasa yang tak terlupakan. Kami dengan bangga mempersembahkan Sambel Bagindo, sajian sambel yang tak hanya melengkapi hidangan, namun juga menghadirkan kelezatan yang tak tertandingi. Dibuat dengan hati dan bahan-bahan pilihan, setiap tetes Sambel Bagindo adalah keharuman rempah-rempah yang memikat dan kepedasan yang menggoda lidah. Mari bergabung dalam petualangan rasa yang tak terlupakan dengan setiap suapan pecel bersama Sambel Bagindo - karena setiap pecel pasti lebih nikmat dengan sentuhan Bagindo.</p>
                                <button className='mt-5 border-0 bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded-[50px]'>Get to know us!</button>
                            </div>
                        </div>
                        <div className='w-1/2 h-full flex flex-col items-center justify-center align-middle'>
                            <div className="w-3/4 h-full">
                                <img className='w-full' width='100%' src="./images/spices.png" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full py-10 flex flex-row bg-red-600">
                <div className="w-1/2 flex justify-end">
                    <div className="w-2/3">
                        <img className='w-2/3' src="./images/dummy.jpg" alt="" />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                    <div className="w-2/3">
                        <h1 className='font-[Licorice] font-bold text-[72px] text-white'>Produk Kami</h1>
                        <p className='font-[Poppins] font-regular text-sm text-white'>Ada 17 varian rasa berbeda yang siap membuat lidah Anda menikmati rasa pedas yang belum pernah anda bayangkan sebelumnya.</p>
                    </div>
                </div>
            </div>
            <div className="w-full py-10 flex flex-row">
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <div className="w-2/3">
                        <h1 className='font-[Licorice] font-bold text-[72px]'>Temukan Kami</h1>
                        <p className='font-[Poppins] font-regular text-sm'>Dengan bangga kami umumkan bahwa Sambel Bagindo telah menjalin kemitraan yang kuat dengan berbagai penjual pecel terkemuka di seluruh negeri. Dari warung kecil hingga restoran ternama, Sambel Bagindo telah menjadi pilihan utama bagi mereka yang menghargai kualitas dan cita rasa yang otentik. Temukanlah kelezatan Sambel Bagindo di berbagai penjuru, karena kesempurnaan rasa pecel bukanlah rahasia lagi ketika Anda memiliki Sambel Bagindo di meja makan Anda.</p>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end">
                    <div className="w-2/3">
                        <img className='w-2/3' src="./images/dummy.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing