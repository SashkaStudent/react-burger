import {
  Counter
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import Price from "../price/price";
import cardStyles from "./ingredient-card.module.css";
import PropTypes from "prop-types";
import ingredientPropTypes from "../../utils/types";

class IngredientCard extends React.Component {
  constructor({
    ingredient,
    counter
  }) {
    super();
    this.counter = counter;
    this._id = ingredient._id;
    this.image = ingredient.image;
    this.name = ingredient.name;
    this.price = ingredient.price;
  }

  render() {
    return (
      <div className={`${cardStyles.card}`}>
        <img className={`${cardStyles.image}`} src={this.image} alt={this.name} />

        {
          this.counter > 0 ? < Counter count={
            this.counter
          }
            size="default" /> : null
        }


        <Price price={this.price} extraClass="pt-2 pb-2" />

        <p className="text text_type_main-default" > {this.name}</p></div>
    );
  }
}

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  counter: PropTypes.number.isRequired
};



export default IngredientCard;