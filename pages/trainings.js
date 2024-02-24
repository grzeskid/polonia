import Baner from "@/components/baner";
import "../app/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

require('dotenv').config()

const libraries = ['places'];
const mapContainerStyle = {
  width: '80vw',
  height: '50vh',
};
const center = {
  lat: 52.39459017004505,    // default latitude
  lng: 16.942002995230485, // default longitude
};
const malta = {
    lat: 52.40204784080429, 
    lng: 16.98737943973524,
};


export default function Trainings(props) {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP,
        libraries,
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) {
        return <div>Loading maps</div>;
      }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Baner>
            <h1 className="text-white text-2xl p-9">Przystań nad Wartą</h1>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={16}
                    center={center}
                >
                    <Marker position={center} />
                </GoogleMap>

                <h1 className="text-white text-2xl p-9">Przystań nad Maltą</h1>

                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={16}
                    center={malta}
                >
                    <Marker position={malta} />
                </GoogleMap>
        </Baner>
      </main>
      <Footer />
    </>
  );

}
