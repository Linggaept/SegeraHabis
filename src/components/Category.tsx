import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={"/img/carousel/SegeraHabis_Slider_1.png"}
          alt="SegeraHabis_Slider_1"
          width={3000}
          height={3000}
          className="w-full h-full object-cover aspect-video rounded-lg"
        />
      </Link>
    </>
  );
}
