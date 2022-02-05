import React from 'react';
import LogoL from '../../assest/scss/images1/LogoL.png'
import phone from '../../assest/scss/images1/phone.png'

function Footer() {

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={LogoL} alt="" />
          <p>Tanışma maillerinizi <strong>info@otoplan.com.tr</strong> adresine bekliyoruz.</p>
        </div>
        <div className="footer__body">
          <div className="footer__bodys">
            <div>
              <h5>KURUMSAL</h5>
              <li><a href="">Hakkımızda</a></li>
              <li><a href="">Hizmetler</a></li>
              <li><a href="">Satış Sonrası</a></li>
            </div>
            <div>
              <h5>BİLGİ BANKASI</h5>
              <li><a href="">Çerez Politikası</a></li>
              <li><a href="">Araç Teslim/İade</a></li>
              <li><a href="">Veri Sahibi Başvuru Formu</a></li>
              <li><a href="">Kişisel Verilerin Korunması</a></li>
              <li><a href="">SSS</a></li>
            </div>
            <div>
              <h5>İLETİŞİM</h5>
              <li><a href="">İletişim</a></li>
              <li><a href="">Memnuniyet Anketi</a></li>
              <li><a href="">Öneri ve Şikayet Formu</a></li>
            </div>
          </div>
          <div className="footer__contact">
            <div>
              <h5>OTO PLAN <img src={phone}/></h5>
              <p>Müşteri Destek Hattı</p>
              <h2>444 5 OTO</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
