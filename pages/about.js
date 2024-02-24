import Baner from "@/components/baner";
import "../app/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function About() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Baner>
          <div className="text-white">
            <h1 className="text-6xl text-center p-9">Historia klubu</h1> 
            <p className="text-xl p-5 text-center">
            Niewątpliwym atutem Towarzystwa Wioślarzy Polonia,
            jest miejsce przystani przy dzisiejszej ul. Wioślarskiej 74.
            Siedziba klubu to unikatowy architektonicznie budynek z 1923 roku z
            charakterystyczną wieżą (klub powstał w 1921 roku) oraz bezpośrednia
            bliskość bulwaru nadwarciańskiego i rzeki Warty.
            </p>
            <p className="text-xl p-5 text-center">
            Od początku
            istnienia klubu wioślarze Polonii zdobywali trofea podczas różnego
            rodzaju regat, ale też zaliczyli wiele wypraw turystycznych. W 1927
            roku miała miejsce największa w historii Towarzystwa, a
            przypuszczalnie również wioślarstwa polskiego, wyprawa braci Adama i
            Bogdana Czamańskich z Poznania do Morza Czarnego i z powrotem.
            Eskapada trwała 3 miesiące, a długość trasy wyniosła 6 tysięcy
            kilometrów!
            </p> 
            <p className="text-xl p-5 text-center">
            Znakomite wyniki sportowe przyszły w Polonii w latach
            70-tych XX wieku. Wtedy zawodnicy towarzystwa zdobyli liczne tytuły
            mistrzów Polski. Wioślarze Polonii z powodzeniem reprezentowali
            także Polskę na arenie międzynarodowej. W 1978 roku wioślarze
            Polonii Grzegorz Nowak i Adam Tomasiak wywalczyli brązowy medal
            mistrzostw świata w dwójkach ze sternikiem w Karapiro w Nowej
            Zelandii. W 1980 roku Nowak i Tomasiak, startujący w czwórce ze
            sternikiem, zdobyli brązowy medal olimpijski podczas igrzysk w
            Moskwie. Przed długie lata był to jedyny w powojennej historii
            poznańskiego wioślarstwa medal olimpijski. 
            </p>
            <p className="text-xl p-5 text-center">
            Po wielu „chudych” latach
            na przełomie XX i XXI wieku, od 2012 roku w klubie starają się
            odbudować sportową świetność klubu. W klubie trenuje spora grupa
            najmłodszych adeptów wioślarstwa, pod trenerską opieką Jacka
            Knopika, Piotra Wleklińskiego i Szymona Wleklińskiego. Szkoleniowcy
            mają wsparcie ze strony obecnej prezeski Anny Kalinowskiej oraz
            innych członków zarządu klubu – Michała Kasprzyka, Szymona
            Rakowskiego, Macieja Kobylińskiego, Joanny Wleklińskiej i Emilii
            Kalinowskiego. W Polonii w ostatnim czasie gruntownie zmodernizowano
            część nadzwyczaj ciekawej przystani wodnej nad Wartą.
            </p>
          </div>
        </Baner>
      </main>
      <Footer />
    </>
  );
}
