import React from 'react';
import gas from '../../assest/scss/images1/gas.png'
import direction from '../../assest/scss/images1/direction.png'
import gear from '../../assest/scss/images1/gear.png'
import km from '../../assest/scss/images1/km.png'
import co from '../../assest/scss/images1/co.png'
// import { RiCarFill } from "react-icons/ri";
// import { MdLocalGasStation } from "react-icons/md";
// import { GiGearStick } from "react-icons/gi";

function OtoCard(props) {
  return (
    <div className="otocard">
      <img src={props.imgSrc} alt="car img" />
      <div className="otocard__body">
        <h5>{props.title}</h5>
        <p><small>{props.info}</small></p>
      </div>
      <div className="otocard__info">
        <p><img src={gas} alt="" /> {props.yakit}</p>
        <p><img src={gear} alt="" /> {props.vites}</p>
        <p><img src={direction} alt="" /> {props.model}</p>
        <p><img src={km} alt="" /> {props.km}</p>
        <p><img src={co} alt="" /> {props.co}</p>
      </div>
      <div className="otocard__info2">
        <p>{props.p}</p>
        <a href=""><font size="5">{props.number}</font>{props.a}</a>
      </div>
    </div>
  );
}

export default OtoCard;
