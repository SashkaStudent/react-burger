import {
  Counter,
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import data from "../../utils/data";
import IngredientCard from "../ingredient-card/ingredient-card";
import "./burger-ingredients.css"
import Price from "../price/price";

const IngredientsTab = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div style={{ display: "flex" }} className="pt-5 pb-10">
      <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="main" active={current === "main"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

function BurgerIngredients(props) {
  // let categories = [...new Set(data.reduce((prev, curr)=>[...prev, curr.type],[]))];
  // console.log(data);

  return (
    <div className="burger-ingredients">
      <h2 className="pt-10 text text_type_main-large">Соберите бургер</h2>
      {IngredientsTab()}

      <div className="ingredients-container" >
        <h2 className="text text_type_main-medium">Булки</h2>
        <div style={{ display: "flex", flexWrap:"wrap", gap:24, justifyContent:"flex-start" }} className="pt-6 pl-4">
          {data
            .filter((value) => value.type === "bun")
            .map((element) => {
              return (
                <IngredientCard {...element} key={element._id} counter={1}/>
              );
            })}
        </div>
        <h2 className="pt-10 text text_type_main-medium">Соусы</h2>
        <div style={{ display: "flex", flexWrap:"wrap", gap:24, justifyContent:"flex-start" }} className="pt-6 pl-4">
          {data
            .filter((value) => value.type === "sauce")
            .map((element) => {
              return (
                <IngredientCard {...element} key={element._id} counter={1}/>
              );
            })}
        </div>
        <h2 className="pt-10 text text_type_main-medium">Начинки</h2>
        <div style={{ display: "flex", flexWrap:"wrap", gap:24, justifyContent:"flex-start" }} className="pt-6 pl-4">
          {data
            .filter((value) => value.type === "main")
            .map((element) => {
              return (
                <IngredientCard {...element} key={element._id} counter={1}/>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;
