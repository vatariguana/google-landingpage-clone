import React from "react";
import "./index.css";
import { BsSearch, BsMic } from "react-icons/bs";
const SearchBar = () => {
  return (
    <form className="container-search ">
      <div className="div-search">
        <BsSearch className="search-lupa" />
        <input className="search-input" />
        <BsMic className="search-microf" />
      </div>
      <div className="button-contenedor">
        <button className="button-searchG">Buscar con google</button>
        <button className="button-suerte">Me siento con suerte</button>
      </div>
      <div className="div-label">
        <label className="label-s">Ofrecido por Google en:</label>
        <a href="https://www.google.com/setprefs?sig=0_S-T9z37gqZ16N71JVBbBMkxKiSk%3D&amp;hl=es-419&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiA8OD4vtP3AhXTnGoFHU4iA2MQ2ZgBCBA">
          Español (Latinoamérica)
        </a>
      </div>
    </form>
  );
};
export default SearchBar;
