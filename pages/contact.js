import Baner from "@/components/baner";
import "../app/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Contact() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Baner>
          <div className="flext justify-center items-center text-white">
            <h1 className="text-3xl p-9">DANE KONTAKTOWE</h1>
            <div className="flex justify-center flex-col items-center">
              <h2>Towarzystwo Wioślarzy Polonia Poznań</h2>
                <address>
                <br/>ul. Wioślarska 74 61-136 Poznań
                <br/>NIP: 782-142-71-92 
                <br/>KRS: 0000318549 
                <br/><br/>Konto bankowe: 
                <br/>PKO BP 03 1020 4027 0000 1302 0031 0532 
                <br/><br/> <a href="mailto:twpoloniapoznan@gmail.com" className="text-blue-900">twpoloniapoznan@gmail.com</a>
                </address> 
              
            </div>
          </div>
        </Baner>
      </main>
      <Footer />
    </>
  );
}
