import React, { useContext } from "react";
import { NumberAndText, Theme } from "../App";

const Komp4 = () => {
  const [theme, setTheme] = useContext(Theme);
  const numAndTe = useContext(NumberAndText);
  return (
    <div className={`${theme}`}>
      <p>{numAndTe}</p>
    </div>
  );
};

export default Komp4;
