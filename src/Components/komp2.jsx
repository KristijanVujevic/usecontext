import React, { useContext, useState } from "react";
import { DodajText, Theme } from "../App";

const Komp2 = () => {
  const [text, setText] = useContext(DodajText);
  const [theme, setTheme] = useContext(Theme);
  const handleChangeIme = (e) => {
    setText("Maja");
  };
  return (
    <div className={`${theme}`}>
      <h1>Globalna varijabla</h1>
      <h3>Ime iz "text": {text}</h3>
      <button type="checkbox" onClick={handleChangeIme}>
        Promijeni ime
      </button>
      <hr />
    </div>
  );
};

export default Komp2;
