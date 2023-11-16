import React, { useContext, useState } from "react";
import { Theme } from "../App";

const Komp3 = () => {
  const [theme, setTheme] = useContext(Theme);
  return (
    <div className={`${theme}`}>
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
      <p>You are using {theme} mode!</p>
    </div>
  );
};

export default Komp3;
