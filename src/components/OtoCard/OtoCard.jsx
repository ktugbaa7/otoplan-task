import React from 'react';

function OtoCard(props) {
  return (
    <div className="otocard">
      <img src={props.imgSrc} alt="car img" />
      <div className="otocard__body">
        <h5>{props.title}</h5>
        <p><small>{props.info}</small></p>
      </div>
      <div className="otocard__info">
        <p>{props.yakit}</p>
        <p>{props.vites}</p>
        <p>{props.model}</p>
        <p>{props.km}</p>
        <p>{props.co}</p>
      </div>
      <div className="otocard__info2">
        <p>Aylık Kira Tutarı</p>
        <a href="">4.150tl 'den başlayan fiyatlar</a>
      </div>
    </div>
  );
}

export default OtoCard;
