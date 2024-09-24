import Navbar from "@/app/Navbar";
import { Skeleton } from "../ui/skeleton";

const LoadingSortByCategories = () => {
  return (
    <>
      <div className="animate-pulse">
        <Navbar />
        <div className="w-11/12 p-5 mx-auto">
          <div className="flex gap-8">
            <div className="flex flex-col w-1/4">
              <div className="flex">
                <h1 className="text-xl font-bold">Kategori</h1>
              </div>
              <div className="flex flex-col p-2 border-2 border-gray-200 shadow-sm rounded-md mt-4 gap-2">
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
              </div>
            </div>
            <div className="flex flex-col w-3/4">
              <h1 className="text-xl flex items-center gap-4">
                Berdasarkan Kategori{" "}
                <span className="font-bold">
                    <Skeleton className="w-24 h-4 flex items-center" />
                </span>
              </h1>

              <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
                <Skeleton className="max-w-sm h-80" />
                <Skeleton className="max-w-sm h-80" />
                <Skeleton className="max-w-sm h-80" />
                <Skeleton className="max-w-sm h-80" />
                <Skeleton className="max-w-sm h-80" />
                <Skeleton className="max-w-sm h-80" />
                <Skeleton className="max-w-sm h-80" />
                <Skeleton className="max-w-sm h-80" />
                <Skeleton className="max-w-sm h-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingSortByCategories;