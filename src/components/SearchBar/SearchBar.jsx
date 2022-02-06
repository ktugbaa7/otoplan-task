import React from 'react';

function SearchBar() {
    return (
        <div className="searchbar">
            <div className="searchbar__options">
                <select className="searchbar__cars" id="cars">
                    <option value="marka">Marka</option>
                </select>
                <select className="searchbar__cars" id="cars">
                    <option value="model">Model</option>
                </select>
                <select className="searchbar__cars" id="cars">
                    <option value="gövde tipi">Gövde Tipi</option>
                </select>
                <select className="searchbar__cars" id="cars">
                    <option value="yakıt tipi">Yakıt Tipi</option>
                </select>
                <select className="searchbar__cars" id="cars">
                    <option value="şanzıman tipi">Şanzıman Tipi</option>
                </select>
                <select className="searchbar__cars" id="cars">
                    <option value="dönem sayısı">Dönem Sayısı</option>
                </select>
                <select className="searchbar__cars" id="cars">
                    <option value="yıllık km">Yıllık KM</option>
                </select>
            </div>
            <form className="searchbar__one">
                <button className="searchbar__button" type="submit">FİLTRELE</button>
            </form>
        </div>
    );
}

export default SearchBar;
