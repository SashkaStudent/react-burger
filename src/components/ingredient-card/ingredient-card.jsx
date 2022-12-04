import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import Price from "../price/price";
import cardStyles from "./ingredient-card.module.css";
import PropTypes from "prop-types";
import ingredientPropTypes from "../../utils/types";

function IngredientCard({ ingredient, counter }) {
  return (
    <div className={`${cardStyles.card}`}>
      <img
        className={`${cardStyles.image}`}
        src={ingredient.image}
        alt={ingredient.name}
      />

      {counter > 0 ? (
        <Counter count={counter} size="default" />
      ) : null}

      <Price price={ingredient.price} extraClass="pt-2 pb-2" />

      <p className="text text_type_main-default"> {ingredient.name}</p>
    </div>
  );
}

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  counter: PropTypes.number.isRequired,
};

export default IngredientCard;
