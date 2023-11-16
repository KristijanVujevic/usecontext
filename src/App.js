import "./App.css";
import React, { createContext, useContext, useState } from "react";
// import Bootstrap from "./Components/bootstrap";
// import FormaBootstrap from "./Components/formaBootstrap";
// import FormaBootstrap2 from "./Components/formaBootstrap2";
// import Dropdowns from "./Components/dropdowns";
import Komp1 from "./Components/komp1";
import Komp2 from "./Components/komp2";
import Komp3 from "./Components/komp3";
import Komp4 from "./Components/komp4";
export const ProslijediText = createContext("Ivo");
export const DodajText = createContext();
export const Theme = createContext("light");
export const NumberAndText = createContext("Ovo je broj 1");
function App() {
  const [theme, setTheme] = useState("dark");
  const ime = useContext(ProslijediText);
  const [text, setText] = useState("Marko");
  const varijabla = useContext(NumberAndText);
  return (
    <div className="App">
      <Theme.Provider value={[theme, setTheme]}>
        <ProslijediText.Provider value={ime}>
          <DodajText.Provider value={[text, setText]}>
            <NumberAndText.Provider value={varijabla}>
              <Komp1 />
              <hr />
              <Komp2 />
              <Komp3 />
              <Komp4 />
            </NumberAndText.Provider>
          </DodajText.Provider>
        </ProslijediText.Provider>
      </Theme.Provider>
      {/* <Bootstrap />
      <hr />
      <FormaBootstrap />
      <hr />
      <FormaBootstrap2 />
      <hr />
      <Dropdowns />
      <hr /> */}
    </div>
  );
}

export default App;
