import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./utils/data.js"

import {
  Tab,
  Button,
  Logo,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <AppHeader className="app-header" />
      </div>
      <div className="container">
        <BurgerIngredients data={data}></BurgerIngredients>
        <BurgerConstructor data={data.filter(val=> val.type!=="bun")} bun={data[14]}></BurgerConstructor>
      </div>
    </div>
  );
}

export default App;
