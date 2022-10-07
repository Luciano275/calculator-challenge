import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeScreen, deleteScreen, clearScreen } from "../redux/reducers";
import { RootState } from "../redux/store";

type propsType = {
  classNKeys: string;
  classNContainerKeys: string;
  classNKeyDR: string;
  classNKeyEqual: string;
};

export default function Keys({
  classNContainerKeys,
  classNKeys,
  classNKeyDR,
  classNKeyEqual,
}: propsType) {
  let dispatch = useDispatch();
  let screen = useSelector((st: RootState) => st.screenReducer.screen);

  const handleChangeScreen = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const { innerText } = ev.target as HTMLElement;
    let valor = innerText === "x" ? "*" : innerText;
    dispatch(changeScreen(valor));
  };

  const handleDeleteScreen = () => {
    if (screen != "") {
      dispatch(deleteScreen(""));
    }
  };

  const handleClearScreen = () => {
    dispatch(clearScreen(""));
  };

  const printResult = () => {
    if (screen != "" && /([+])|([-])|([*])|(\/)/.test(screen)) {
      handleClearScreen();
      dispatch(changeScreen(eval(screen)));
    }
  };

  return (
    <div className={`calculator-keys ${classNContainerKeys}`}>
      <button className={classNKeys} onClick={handleChangeScreen}>
        7
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        8
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        9
      </button>
      <button className={classNKeyDR} id="del" onClick={handleDeleteScreen}>
        DEL
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        4
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        5
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        6
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        +
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        1
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        2
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        3
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>{`-`}</button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        .
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        0
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        /
      </button>
      <button className={classNKeys} onClick={handleChangeScreen}>
        x
      </button>
      <button className={classNKeyDR} id="reset" onClick={handleClearScreen}>
        Reset
      </button>
      <button
        className={classNKeyEqual}
        id="equal"
        onClick={printResult}
      >{`=`}</button>
    </div>
  );
}
