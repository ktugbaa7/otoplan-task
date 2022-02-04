import React, { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import car1 from './assest/scss/images1/car1.png'
import car2 from './assest/scss/images1/car2.png'
import car3 from './assest/scss/images1/car3.png'
import car4 from './assest/scss/images1/car4.png'
import car5 from './assest/scss/images1/car5.png'
import car6 from './assest/scss/images1/car6.png'

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
      imgSrc: car1
    },
    {
      title: "Ford Focus",
      info: "1.5 TDCI 120 BG PWS Trend X 4K",
      yakit: "Dizel",
      vites: "Otomatik",
      model: "Sedan",
      km: "8,4-5,1 l/100 km",
      co: "190-134 g/km",
      imgSrc: car2
    },
    {
      title: "Volvo V60 Cross Country",
      info: "Momentum 2.0 D4 AWD 190 BG Geartronic",
      yakit: "Dizel",
      vites: "Otomatik",
      model: "Station Wagon",
      km: "8,4-5,1 l/100 km",
      co: "190-134 g/km",
      imgSrc: car3
    },
    {
      title: "Mercedes C200d",
      info: "FL AMG 1.6 160 BG 9G-Tronic",
      yakit: "Dizel",
      vites: "Otomatik",
      model: "Sedan",
      km: "8,4-5,1 l/100 km",
      co: "190-134 g/km",
      imgSrc: car4
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
      imgSrc: car5
    },
    {
      title: "Jeep Renegade",
      info: "1.3 i 150 BG DDCT Longitude",
      yakit: "Benzinli",
      vites: "Otomatik",
      model: "SUV",
      km: "8,4-5,1 l/100 km",
      co: "190-134 g/km",
      imgSrc: car6
    }

  ])
  // 
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Main carItems={car} carBotItems={carBot}/>
    </div>
  );
}

export default App;
