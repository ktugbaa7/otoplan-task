import React from 'react';
import logo1 from '../../assest/scss/images1/logo1.png'
import logo2 from '../../assest/scss/images1/logo2.png'

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__logo1">
                <a href="">
                    <img src={logo1} alt="logo1" />
                </a>
            </div>
            <div className="navbar__menu">
                <div className="navbar__menu1">
                    <nav>
                        <a href="">Kampanyalar</a>
                        <a href="">İletişim</a>
                        <a href="">Haberler</a>
                    </nav>
                </div>
                <div className="navbar__menu2">
                    <nav>
                        <a href="">Kurumsal</a>
                        <a href="">Hizmetler</a>
                        <a href="">Satış Sonrası</a>
                        <a href="">2. El Araçlar</a>
                        <a href="">EN</a>
                    </nav>
                </div>
            </div>
            <div className="navbar__logo2">
                <a href="">
                    <img src={logo2} alt="logo" />
                </a>
            </div>  
        </div>
    );
}

export default NavBar;
