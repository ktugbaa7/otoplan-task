import React from 'react';

function SearchBar(props) {

    return (
        <div className="searchbar">
            <div className="searchbar__container">
                <div className="searchbar__options">
                    <select className="searchbar__cars" id="cars" onChange={props.setBrand}>
                        {props.brand?.map((brand) => {
                            return (
                                <option value={brand.Id}>{brand.BrandName}</option>
                            )
                        })}
                    </select>
                    <select className="searchbar__cars" id="cars">
                        {props.model?.map((model) => {
                            return (
                                <option value="model">{model.ModelName}</option>
                            )
                        })}
                    </select>
                    <select className="searchbar__cars" id="cars">
                        {props.geartype?.map((geartype) => {
                            return (
                                <option value="gövde tipi">{geartype.Name}</option>
                            )
                        })}
                    </select>
                    <select className="searchbar__cars" id="cars">
                        {props.fueltype?.map((fueltype) => {
                            return (
                                <option value="yakıt tipi">{fueltype.Name}</option>
                            )
                        })}
                    </select>
                    <select className="searchbar__cars" id="cars">
                        {props.bodytype?.map((bodytype) => {
                            return (
                                <option value="şanzıman tipi">{bodytype.Name}</option>
                            )
                        })}
                    </select>
                    <select className="searchbar__cars" id="cars">
                    {props.web?.map((web) => {
                        return (
                        <option value="dönem sayısı">{web.CarPack}</option>
                        )
                    })}    
                    </select>
                    <select className="searchbar__cars" id="cars">
                        {props.slider?.map((slider) => {
                            return (
                                <option value="yıllık km">Slider{slider.Title}</option>
                            )
                        })}
                    </select>
                </div>
                <form className="searchbar__one">
                    <button className="searchbar__button" type="submit">FİLTRELE</button>
                </form>
            </div>
        </div>
    );
}

export default SearchBar;
