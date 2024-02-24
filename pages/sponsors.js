import Baner from "@/components/baner";
import "../app/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Sponsors() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Baner>
            <Image
                src={"/poznan.png"}
                width={1000}
                height={1000}
                alt="logo sponsora"
                className="py-20"
            />

            <Image
                src={"/swarzedz.png"}
                width={1000}
                height={1000}
                alt="logo sponsora"
                className="py-20"
            />

            <Image
                src={"/ministerstwo.png"}
                width={1000}
                height={1000}
                alt="logo sponsora"
                className="py-20"
            />

            <Image
                src={"/wss.webp"}
                width={1000}
                height={1000}
                alt="logo sponsora"
                className="py-20"
            />
          {/* <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="/poznan.png"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="/swarzedz.png"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="/ministerstwo.png"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="/wss.webp"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div> */}
        </Baner>
      </main>
      <Footer />
    </>
  );
}
