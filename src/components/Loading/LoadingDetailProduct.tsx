import Navbar from "@/app/Navbar";
import { FaCartPlus } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const LoadingDetailProduct = () => {
  return (
    <>
      <Navbar />
      <section className="w-full">
        <div className="w-11/12 p-5">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-11/12">
              <div className="w-full">
                <div className="bg-gray-400 rounded-md aspect-square animate-pulse"></div>
              </div>
              <div className="w-full flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl md:text-3xl font-extrabold bg-gray-400 rounded-md w-full">
                  </h1>
                  <div className="flex gap-2 items-center">
                    <span>
                      <SlCalender className="w-3 h-3 md:w-4 md:h-4 mt-0.5 md:mt-0 text-yellow-500" />
                    </span>
                    <h1 className="text-gray-700 font-medium text-xs md:text-sm">
                      21 hari lagi | 1rb+ terjual
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <h1 className="text-3xl md:text-4xl font-extrabold bg-gray-400 rounded-md w-full aspect-auto">
                    
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-medium text-sm md:text-sm">Kuantitas</h1>
                  <div className="flex items-center">
                    <button className="py-2 px-3 border border-gray-300 bg-gray-200 rounded-l-sm text-sm">
                      -
                    </button>
                    <span className="py-2 px-8 border border-gray-300 bg-none text-sm">
                      1
                    </span>
                    <button className="py-2 px-3 border border-gray-300 bg-gray-200 rounded-r-sm text-sm">
                      +
                    </button>
                  </div>
                </div>
                <div className="flex">
                  <button className="flex items-center p-4 bg-green-700 rounded-md gap-3">
                    <span>
                      <FaCartPlus className="w-3 h-3 md:w-6 md:h-6 text-white" />
                    </span>
                    <span>
                      <h1 className="text-lg font-semibold text-white">
                        Tambahkan ke Keranjang
                      </h1>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-11/12 mx-auto">
              <div className="flex flex-col w-1/2 gap-2">
                <div className="flex">
                  <h1 className="text-2xl font-bold text-black">
                    Informasi Produk
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-gray-600 text-sm font-normal">
                    Kategori : 
                  </h1>
                  <h1 className="text-gray-600 text-sm font-normal">
                    Deskripsi :{" "}
                  </h1>
                </div>
                <div className="flex">
                  <h1 className="text-black text-sm font-normal bg-gray-400 rounded-md w-full">
                    
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoadingDetailProduct;