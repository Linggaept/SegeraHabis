import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="w-full flex flex-col">
          <div className="w-full flex bg-gray-200 p-3">
            <div className="w-full text-center">
              <h1 className="text-sm font-medium">
                Diskon 20% untuk Semua Produk Sebelum Waktu Habis!{" "}
                <Link href={"/#"}>
                  <span className="font-bold">Beli Sekarang</span>
                </Link>
              </h1>
            </div>
            <div className="items-end w-1/4 gap-10 hidden md:flex ">
              <Link href={"/"}>
                <h1 className="text-sm font-medium">Tentang SegeraHabis</h1>
              </Link>
              <Link href={"/"}>
                <h1 className="text-sm font-bold">Buka Toko</h1>
              </Link>
            </div>
          </div>

          <div className="p-5 w-11/12 flex mx-auto items-center">
            <div className="justify-start w-2/12">
              <Link href={"/"}>
                <Image
                  src={"/svg/Logo.svg"}
                  alt="Logo"
                  width={150}
                  height={150}
                />
              </Link>
            </div>

            <div className="flex justify-center w-8/12 ">
              <form action="" className="flex">
                <input
                  type="text"
                  placeholder="Cari produk favoritmu"
                  className="w-30 h-8 text-xs md:h-12 md:text-md md:w-96 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <button
                  type="submit"
                  className="h-8 md:h-12 bg-green-700 py-1 px-5 rounded-r-lg border-2 border-green-700 hover:bg-green-600 duration-300 hover:border-green-600"
                >
                  <h1 className="text-xs md:text-sm font-medium text-white">
                    Cari
                  </h1>
                </button>
              </form>
            </div>

            <div className="md:flex justify-end gap-5 items-center hidden w-1/4">
              <Link href={"/#"} className="">
                <h1 className="text-sm font-bold text-green-700 bg-white py-2 px-5 rounded-md border-2 border-green-700 hover:bg-green-600 duration-300 hover:text-white">
                  Masuk
                </h1>
              </Link>
              <Link href={"/#"} className="">
                <h1 className="text-sm font-bold text-white bg-green-700 py-2 px-5 rounded-md border-2 border-green-700 hover:bg-white duration-300 hover:border-green-600 hover:text-green-600">
                  Daftar
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
