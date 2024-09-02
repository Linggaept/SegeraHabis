import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t-2 border-gray-200">
        <div className="md:flex block px-5 py-16 w-11/12 mx-auto gap-20">
          <div className="flex flex-col w-5/12 gap-5">
            <Image src={"/svg/Logo.svg"} alt="Logo" width={150} height={150} />
            <h1 className="text-md font-normal text-gray-500">
              Segerahabis adalah marketplace diskon eksklusif untuk produk
              berkualitas yang mendekati tanggal kadaluwarsa. Dapatkan penawaran
              menarik dengan harga terbaik sebelum kehabisan!
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex">
              <h1 className="text-md text-gray-600 font-bold">Tentang Kami</h1>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-md font-normal text-gray-500">
                Visi & Misi Segerahabis
              </h1>
              <h1 className="text-md font-normal text-gray-500">
                Tim Segerahabis
              </h1>
              <h1 className="text-md font-normal text-gray-500">
                S&K Segerahabis
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex">
              <h1 className="text-md text-gray-600 font-bold">Kontak</h1>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-md font-normal text-gray-500">
                hello@segerahabis.com
              </h1>
              <h1 className="text-md font-normal text-gray-500">
                +62 123 456 789 10
              </h1>
              <h1 className="text-md font-normal text-gray-500">
                instagram.com/segerahabis
              </h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
