import React, { useContext, useState } from "react";
import { DodajText, Theme } from "../App";

const Komp2 = () => {
  const [text, setText] = useContext(DodajText);
  const [theme] = useContext(Theme);
  const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"];
  const [counter, setCounter] = useState(0);

  const handleChangeIme = () => {
    setCounter(counter + 1);

    const shuffledNames = names.sort(() => Math.random() - 0.5);

    const selectedName = shuffledNames[0];

    setText(`${selectedName}, you changed the name ${counter} time|s`);
  };

  return (
    <div className={theme}>
      <h1>Globalna varijabla</h1>
      <h3>Ime iz "text": {text}</h3>
      <button onClick={handleChangeIme}>Promijeni ime</button>
      <hr />
    </div>
  );
};

export default Komp2;
