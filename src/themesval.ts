import React from "react";

const initial_translate = "translateX(0%)";

interface IProps {
  countTheme: number;
  setTranslate: React.Dispatch<React.SetStateAction<string>>;
  setClassNColor: React.Dispatch<React.SetStateAction<string>>;
  setClassNContainerCircle: React.Dispatch<React.SetStateAction<string>>;
  setClassNCircle: React.Dispatch<React.SetStateAction<string>>;
  setClassNScreen: React.Dispatch<React.SetStateAction<string>>;
  setClassNKeys: React.Dispatch<React.SetStateAction<string>>;
  setClassNContainerKeys: React.Dispatch<React.SetStateAction<string>>;
  setClassNKeyDR: React.Dispatch<React.SetStateAction<string>>;
  setClassNKeyEqual: React.Dispatch<React.SetStateAction<string>>;
}

export function darkTheme({
  countTheme,
  setTranslate,
  setClassNColor,
  setClassNContainerCircle,
  setClassNCircle,
  setClassNScreen,
  setClassNKeys,
  setClassNContainerKeys,
  setClassNKeyDR,
  setClassNKeyEqual
}: IProps): void {

  document.body.classList.remove("light-theme-body");
  document.body.classList.remove("violet-theme-body");
  document.body.classList.add("dark-theme-body");

  setClassNColor("dark-theme-header");
  setClassNContainerCircle('dark-theme-container-circle');
  setTranslate(initial_translate);
  setClassNScreen('dark-theme-screen');
  setClassNCircle('dark-theme-circle');
  setClassNContainerKeys('dark-theme-container-keys');
  setClassNKeys('dark-theme-keys');
  setClassNKeyDR('dark-theme-key-dr');
  setClassNKeyEqual('dark-theme-key-equal');

  if (countTheme == 2) {
    document.body.classList.remove("dark-theme-body");
    document.body.classList.remove("violet-theme-body");
    document.body.classList.add("light-theme-body");

    setClassNColor("light-theme-header");
    setClassNContainerCircle('light-theme-container-circle');
    setTranslate("translateX(100%)");
    setClassNCircle('light-theme-circle');
    setClassNScreen('light-theme-screen');
    setClassNContainerKeys('light-theme-container-keys');
    setClassNKeys('light-theme-keys');
    setClassNKeyDR('light-theme-key-dr');
    setClassNKeyEqual('light-theme-key-equal');


  }

  if (countTheme == 3) {
    document.body.classList.remove("dark-theme-body");
    document.body.classList.remove("light-theme-body");
    document.body.classList.add("violet-theme-body");

    setClassNColor("violet-theme-header");
    setClassNContainerCircle('violet-theme-container-circle');
    setTranslate("translateX(200%)");
    setClassNCircle('violet-theme-circle');
    setClassNScreen('violet-theme-screen');
    setClassNContainerKeys('violet-theme-container-keys');
    setClassNKeys('violet-theme-keys');
    setClassNKeyDR('violet-theme-key-dr');
    setClassNKeyEqual('violet-theme-key-equal');

  }

}

export function lightTheme({
  countTheme,
  setTranslate,
  setClassNColor,
  setClassNContainerCircle,
  setClassNCircle,
  setClassNScreen,
  setClassNKeys,
  setClassNContainerKeys,
  setClassNKeyDR,
  setClassNKeyEqual
}: IProps): void {

  document.body.classList.remove("dark-theme-body");
  document.body.classList.remove("violet-theme-body");
  document.body.classList.add("light-theme-body");

  setClassNColor("light-theme-header");
  setClassNContainerCircle('light-theme-container-circle');
  setTranslate(initial_translate);
  setClassNCircle('light-theme-circle');
  setClassNScreen('light-theme-screen');
  setClassNContainerKeys('light-theme-container-keys');
  setClassNKeys('light-theme-keys');
  setClassNKeyDR('light-theme-key-dr');
  setClassNKeyEqual('light-theme-key-equal');

  if (countTheme == 2) {

    document.body.classList.remove("light-theme-body");
    document.body.classList.remove("violet-theme-body");
    document.body.classList.add("dark-theme-body");

    setClassNColor("dark-theme-header");
    setTranslate("translateX(100%)");
    setClassNScreen('dark-theme-screen');
    setClassNContainerKeys('dark-theme-container-keys');
    setClassNKeys('dark-theme-keys');
    setClassNKeyDR('dark-theme-key-dr');
    setClassNKeyEqual('dark-theme-key-equal');

  }

  if (countTheme == 3) {
    document.body.classList.remove("dark-theme-body");
    document.body.classList.remove("light-theme-body");
    document.body.classList.add("violet-theme-body");

    setClassNColor("violet-theme-header");
    setTranslate("translateX(200%)");
    setClassNScreen('violet-theme-screen');
    setClassNContainerKeys('violet-theme-container-keys');
    setClassNKeys('violet-theme-keys');
    setClassNKeyDR('violet-theme-key-dr');
    setClassNKeyEqual('violet-theme-key-equal');

  }

}
