import "./App.css";
import Image from "react-bootstrap/Image";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { getBanner, getShopById } from "./api";
import { Spinner } from "react-bootstrap";

function App() {
  const [shop, setShop] = useState();
  const [banner, setBanner] = useState();

  const customIcon = new Icon({
    iconUrl: require("./placeholder.png"),
    iconSize: [38, 38], // size of the icon
    className: "",
  });

  const fecthData = async () => {
    try {
      const shopRes = await getShopById("1");
      const bannerRes = await getBanner();
      setShop(shopRes);
      setBanner(bannerRes[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <div className="w-full text-center">
      {banner ? (
        <Image className="w-full max-h-64 bg-cover" src={banner.link} fluid />
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {shop ? (
        <>
          <h1 className="font-bold text-4xl mb-4 mt-4">{shop.name}</h1>
          <div className="w-full flex justify-center">
            <MapContainer
              center={[shop.lat, shop.lng]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[shop.lat, shop.lng]} icon={customIcon}>
                <Popup>
                  Name: {shop.name}
                  <br />
                  Lat: {shop.lat}
                  <br />
                  Lng: {shop.lng}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export default App;
