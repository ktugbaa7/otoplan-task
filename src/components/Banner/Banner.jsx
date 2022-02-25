import React from 'react';
import banner from '../../assest/scss/images1/banner.png'

function Banner() {
  return (
    <div className="banne">
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <div className="title">
        <div className="main">
          <div className="main__comment">
            <p><strong>Oto Plan</strong>, operasyonel filo kiralama sektörüne modern ve yenilikçi bir bakış açısı getiren vizyonu ile 2012 yılında kurulmuş,        üst yönetim kadrosunda alanının önde gelen isimlerini bir araya getirmiş, tamamen yerli sermayeli bir filo kiralama markasıdır.</p>
          </div>
          <span className="main__button">
            <button className="button" type="submit">Hakkımızda</button>
          </span>
        </div>
      </div>
    </div>

  );
}

export default Banner;
