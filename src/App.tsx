import { useState, useEffect } from "react";
import Keys from "./components/Keys";
import Screen from "./components/Screen";
import { darkTheme, lightTheme } from "./themesval";

function App() {
  const initial_translate = "translateX(0%)";
  const initial_count: number = 1;

  const [classNColor, setClassNColor] = useState<string>("");
  const [classNContainerCirlcle, setClassNContainerCircle] =
    useState<string>("");
  const [classNCircle, setClassNCircle] = useState<string>("");
  const [classNScreen, setClassNScreen] = useState<string>("");
  const [classNContainerKeys, setClassNContainerKeys] = useState<string>("");
  const [classNKeys, setClassNKeys] = useState<string>("");
  const [classNKeyDR, setClassNKeyDR] = useState<string>("");
  const [classNKeyEqual, setClassNKeyEqual] = useState<string>("");

  const [countTheme, setCountTheme] = useState<number>(initial_count);
  const [translateCircle, setTranslate] = useState<string>(initial_translate);

  const drk = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //True or False

  const themesValidation = (countTheme: number) => {
    if (drk) {
      darkTheme({
        countTheme,
        setTranslate,
        setClassNColor,
        setClassNContainerCircle,
        setClassNCircle,
        setClassNScreen,
        setClassNContainerKeys,
        setClassNKeys,
        setClassNKeyDR,
        setClassNKeyEqual,
      });
    } else {
      lightTheme({
        countTheme,
        setTranslate,
        setClassNColor,
        setClassNContainerCircle,
        setClassNCircle,
        setClassNScreen,
        setClassNContainerKeys,
        setClassNKeys,
        setClassNKeyDR,
        setClassNKeyEqual,
      });
    }
  };

  useEffect(() => themesValidation(countTheme), []);

  const handleTheme = () => {
    if (countTheme === 3) {
      setCountTheme(initial_count);
    } else {
      setCountTheme(countTheme + 1);
    }

    themesValidation(countTheme + 1);
  };

  return (
    <div className="calculator">
      <header className={`${classNColor}`}>
        <h1>calc</h1>
        <div className="themes">
          <h6>THEME</h6>
          <div id="numbers">
            <span className="number" id="num1">
              <h6>1</h6>
            </span>
            <span className="number" id="num2">
              <h6>2</h6>
            </span>
            <span className="number" id="num3">
              <h6>3</h6>
            </span>
          </div>
          <div className="container">
            <div
              className={`container-circle ${classNContainerCirlcle}`}
              onClick={handleTheme}
            >
              <span
                className={`circle ${classNCircle}`}
                style={{
                  transform: translateCircle,
                }}
              ></span>
            </div>
          </div>
        </div>
      </header>
      <Screen classNScreen={classNScreen} />
      <Keys
        classNContainerKeys={classNContainerKeys}
        classNKeys={classNKeys}
        classNKeyDR={classNKeyDR}
        classNKeyEqual={classNKeyEqual}
      />
      <div className={`attribution ${classNColor}`}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.frontendmentor.io/profile/Luciano275">Luciano Luna</a>.
      </div>
    </div>
  );
}

export default App;
