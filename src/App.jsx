import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
        <BurgerIngredients></BurgerIngredients>
        <BurgerConstructor></BurgerConstructor>
      </div>
    </div>
  );
}

export default App;
