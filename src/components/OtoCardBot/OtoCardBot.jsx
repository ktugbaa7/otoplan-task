import React from 'react';

function OtoCardBot(props) {
    return (
        <div className="cardbot">
            <img src={props.imgSrc} alt="car img" />
            <div className="cardbot__body">
                <h5>{props.title}</h5>
                <p><small>{props.info}</small></p>
                <div className="cardbot__info">
                    <p>{props.yakit}</p>
                    <p>{props.vites}</p>
                    <p>{props.model}</p>
                    <p>{props.km}</p>
                    <p>{props.co}</p>
                </div>
            </div>

            <div className="cardbot__info2">
                <p>Aylık Kira Tutarı</p>
                <a href="">4.150tl 'den başlayan fiyatlar</a>
            </div>
        </div>
    );
}

export default OtoCardBot;
