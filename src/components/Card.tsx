import Image from "next/image";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const Card = ({ product } : ProductProps) => {
  return (
    <Link href={`/Product/${product.id}`}>
      <div className="max-w-sm bg-white border-2 border-gray-200 rounded-lg shadow">
        <div className="flex flex-col">
          <Image
            src={product.image}
            alt={product.title}
            width={3000}
            height={3000}
            className="w-full h-full object-cover aspect-square rounded-t-lg"
          />
          <div className="w-full p-5 flex flex-col gap-3">
            <div className="flex h-14 overflow-hidden">
              <h1 className="text-sm md:text-md font-semibold text-black">
                {product.title}
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm md:text-xl font-extrabold text-black">
                ${product.price}
              </h1>
              <div className="flex gap-2">
                <h1 className="text-gray-400 line-through text-xs">${product.price * 80/100}</h1>
                <span className="text-red-500 font-bold text-xs">20%</span>
              </div>
            </div>
            <div className="flex gap-2 ">
              <span>
                <SlCalender className="w-3 h-3 md:w-4 md:h-4 mt-0.5 md:mt-0 text-yellow-500" />
              </span>
              <h1 className="text-gray-700 font-medium text-xs md:text-sm">
                21 hari lagi | 1rb+ terjual
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
