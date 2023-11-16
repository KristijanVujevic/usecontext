import React, { useContext } from "react";
import { DodajText, ProslijediText, Theme } from "../App";

const Komp1 = () => {
  const [theme, setTheme] = useContext(Theme);
  const naziv = useContext(ProslijediText);
  const [text, setText] = useContext(DodajText);

  return (
    <div className={`${theme}`}>
      <p>
        Kontekst ProslijediTekst: <strong>{naziv}</strong>
      </p>
      <p>Kontekst Dodaj: {text}</p>
    </div>
  );
};

export default Komp1;
