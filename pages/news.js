import Baner from "@/components/baner";
import "../app/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Card from "@/components/card";

export default function News() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Baner>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Baner>
      </main>
      <Footer />
    </>
  );
}
