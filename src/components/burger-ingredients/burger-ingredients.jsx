import {
  Counter,
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import ingredientsStyle from "./burger-ingredients.module.css"
import PropTypes from "prop-types";
import ingredientPropTypes from "../../utils/types";



const IngredientsTab = () => {
  const [current, setCurrent] = React.useState("bun");
  const scrollToCurrent = (value) =>{
    setCurrent(value);
    document.getElementById(value).scrollIntoView({behavior: "smooth"})
  }
  return (
    <div className={`${ingredientsStyle.tab} pt-5 pb-10`}>
      <Tab value="bun" active={current === "bun"} onClick={scrollToCurrent}>
        Булки
      </Tab>
      <Tab value="sauce" active={current === "sauce"} onClick={scrollToCurrent}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={scrollToCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

function BurgerIngredients(props) {
  // let categories = [...new Set(data.reduce((prev, curr)=>[...prev, curr.type],[]))];
  // console.log(data);
  return (
    <div className={ingredientsStyle.ingredients}>
      <h2 className="pt-10 text text_type_main-large">Соберите бургер</h2>
      {IngredientsTab()}

      <div className={ingredientsStyle.container}>
        <h2 id="bun" className="text text_type_main-medium">Булки</h2>
        <div className={`${ingredientsStyle.category} pt-6 pl-4`}>
        {props.data
            .filter((value) => value.type === "bun")
            .map((element) => {
              return (
                <IngredientCard ingredient={element} key={element._id} counter={1} />
              );
            })}
        </div>
        <h2 id="sauce" className="pt-10 text text_type_main-medium">Соусы</h2>
        <div className={`${ingredientsStyle.category} pt-6 pl-4`}>
          {props.data
            .filter((value) => value.type === "sauce")
            .map((element) => {
              return (
                <IngredientCard ingredient={element} key={element._id} counter={1} />
              );
            })}
        </div>
        <h2 id="main" className="pt-10 text text_type_main-medium">Начинки</h2>
        <div className={`${ingredientsStyle.category} pt-6 pl-4`}>
          {props.data
            .filter((value) => value.type === "main")
            .map((element) => {
              return (
                <IngredientCard ingredient={element} key={element._id} counter={1} />
              );
            })}
        </div>
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired
}

export default BurgerIngredients;
