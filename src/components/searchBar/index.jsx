import React, { useState } from "react";
import "./index.css";
import { BsSearch, BsMic } from "react-icons/bs";
const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const onInputChangeGoogle = (e) => {
    e.preventDefault(e);
    const value = e.target.value;
    setInputValue(value);
  };
  const onSearchGoogle = (e) => {
    e.preventDefault();
  };
  return (
    <form className="container-search ">
      <div className="div-search">
        <BsSearch className="search-lupa" />
        <input
          value={inputValue}
          onClick={onInputChangeGoogle}
          className="search-input"
        />
        <BsMic className="search-microf" />
      </div>
      <div className="button-contenedor">
        <button onClick={onSearchGoogle} className="button-searchG">
          Buscar con google
        </button>
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
