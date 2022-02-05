import React, { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import car1 from './assest/scss/images1/car1.png'
import car2 from './assest/scss/images1/car2.png'
import car3 from './assest/scss/images1/car3.png'
import car4 from './assest/scss/images1/car4.png'
import car5 from './assest/scss/images1/car5.png'
import car6 from './assest/scss/images1/car6.png'
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [car, setCar] = useState([
    {
      title: "Fiat Doblo",
      info: "Cargo S1 PLUS MAXI 1.6 ESP",
      yakit: "Dizel",
      vites: "Manuel",
      model: "Minivan",
      km: "8,4-5,1 l/100 km",
      co: "190-134 g/km",
      imgSrc: car1,
      p : "Aylık Kira Tutarı",
      number : "4.150",
      a : "TL 'den başlayan fiyatlar"
    },
    {
      title: "Ford Focus",
      info: "1.5 TDCI 120 BG PWS Trend X 4K",
      yakit: "Dizel",
      vites: "Otomatik",
      model: "Sedan",
      km: "8,4-5,1 l/100 km",
      co: "190-134 g/km",
      imgSrc: car2,
      p : "En Uygun Fiyatlar İçin",
      a : "Teklif Al"
    },
    {
      title: "Volvo V60 Cross Country",
      info: "Momentum 2.0 D4 AWD 190 BG Geartronic",
      yakit: "Dizel",
      vites: "Otomatik",
      model: "Station Wagon",
      km: "8,4-5,1 l/100 km",
      co: "190-134 g/km",
      imgSrc: car3,
      p : "Aylık Kira Tutarı",
      number : "8.750",
      a : "TL 'den başlayan fiyatlar"
    },
    {
      title: "Mercedes C200d",
      info: "FL AMG 1.6 160 BG 9G-Tronic",
      yakit: "Dizel",
      vites: "Otomatik",
      model: "Sedan",
      km: "8,4-5,1 l/100 km",
      co: "190-134 g/km",
      imgSrc: car4,
      p : "En Uygun Fiyatlar İçin",
      a : "Hemen İncele"
    },

  ])
  const [carBot, setCarBot] = useState([
    {
      title: "BMW",
      info: "520i Sedan 170 BG",
      yakit: "Benzinli",
      vites: "Otomatik",
      model: "Sedan",
      km: "8,4-5,1 l/100 km",
      co: "190-134 g/km",
      imgSrc: car5,
      p : "Aylık Kira Tutarı",
      number : "15.800",
      a : "TL 'den başlayan fiyatlar"
    },
    {
      title: "Jeep Renegade",
      info: "1.3 i 150 BG DDCT Longitude",
      yakit: "Benzinli",
      vites: "Otomatik",
      model: "SUV",
      km: "8,4-5,1 l/100 km",
      co: "190-134 g/km",
      imgSrc: car6,
      p : "En Uygun Fiyatlar İçin",
      a : "Teklif Al"
    }

  ])
  // 
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Main carItems={car} carBotItems={carBot}/>
      <Footer />
    </div>
  );
}

export default App;
