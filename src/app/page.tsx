import CarouselLanding from "@/components/Carousel";
import Navbar from "./Navbar";
import Card from "@/components/Card";
import Category from "@/components/Category";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-11/12 px-1 md:px-5 mx-auto">
        <div className="w-full">
          <CarouselLanding />
          <div className="w-full py-5">
            <h1 className="text-2xl font-extrabold text-black py-5">
              Kategori
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
            </div>
          </div>
          <div className="w-full py-5">
            <h1 className="text-2xl font-extrabold text-black py-5">
              Produk Kami
            </h1>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
