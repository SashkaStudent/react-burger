import React from "react";
import data from "../../utils/data.js"
import styles from "./app.module.css"

import {
  Tab,
  Button,
  Logo,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <AppHeader/>
      </div>
      <main className={styles.container}>
        <BurgerIngredients data={data}></BurgerIngredients>
        <BurgerConstructor data={data.filter(val=> val.type!=="bun")} bun={data[14]}></BurgerConstructor>
      </main>
    </div>
  );
}

export default App;
