/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/app/Navbar";

const CategoriesDetailClient = () => {
  return (
    <div>
      <Navbar />
      <div className="w-11/12 p-5 mx-auto">
        <div className="flex gap-8">
          <div className="flex flex-col w-1/4">
            <div className="flex">
              <h1 className="text-xl font-bold">Filter</h1>
            </div>
            <div className="flex flex-col p-2 border-2 border-gray-200 shadow-sm rounded-md mt-4">
            </div>
          </div>
          <div className="flex flex-col w-3/4">
            <h1 className="text-xl">
              Berdasarkan Kategori <span className="font-bold">"Nama Kategori"</span>
            </h1>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDetailClient;
