import React from 'react';
import OtoCard from '../OtoCard/OtoCard';
import OtoCardBot from '../OtoCardBot/OtoCardBot';
import car_hero from '../../assest/scss/images1/car_hero.png'

function Main(props) {
  return (
    <main>
      <div className="main">
        <div className="main__comment">
          <p><strong>Oto Plan</strong>, operasyonel filo kiralama sektörüne modern ve yenilikçi bir bakış açısı getiren vizyonu ile 2012 yılında kurulmuş,        üst yönetim kadrosunda alanının önde gelen isimlerini bir araya getirmiş, tamamen yerli sermayeli bir filo kiralama markasıdır.</p>
        </div>
        <div className="main__button">
          <button className="button" type="submit">Hakkımızda</button>
        </div>
      </div>
      <div className="box">
        <h1>Kampanyalar</h1>
        <a href="">Tüm Kampanyaları Görüntüle</a>
      </div>
      <div className="card-body">
        {props.carItems.map(oto => {
          return <OtoCard
            title={oto.title}
            info={oto.info}
            yakit={oto.yakit}
            vites={oto.vites}
            model={oto.model}
            km={oto.km}
            co={oto.co}
            imgSrc={oto.imgSrc}
          />
        })}
      </div>
      <div className="card-body">
        {props.carBotItems.map(bot => {
          return <OtoCardBot
            title={bot.title}
            info={bot.info}
            yakit={bot.yakit}
            vites={bot.vites}
            model={bot.model}
            km={bot.km}
            co={bot.co}
            imgSrc={bot.imgSrc}
          />
        })}
      </div>
      <div className="main-sub">
        <img src={car_hero} alt="" />
        <div className="main-sub__sub">
          <h3>Akıllı Planlar Oto Plan’da</h3>
          <h4>Operasyonel kiralamalarda sınırsız hizmeti tek fiyatla alın.</h4>
          <p>Her Şey Dahil Paketimiz; 0 Km Araçlar, Esnek Planlar, Genişletilmiş Kasko, Kış Lastiği Değişimi, Cezasız İade Koşulları, 7/24 Yol Yardım, Bakım ve Onarım Hizmeti, İkame Araç, 7/24 Yol Yardım Desteği, Çekici Hizmeti, Motorlu Taşıtlar Vergisi, Trafik Sigortası, Araç Muayenesi gibi Operasyonel Filo Kiralamanın bütün avantajlarını içermektedir.</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
