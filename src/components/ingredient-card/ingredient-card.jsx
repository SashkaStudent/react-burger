import {
  Counter
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import Price from "../price/price";
import "./ingredient-card.css";
import PropTypes from "prop-types";

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
      <div className="ingredient-card" key={this._id}>
        <img className="ingredient-image" src={this.image} alt={this.name} />

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
const ingredientPropTypes = PropTypes.shape({
  calories: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string,
  image_mobile: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  proteins: PropTypes.number,
  type: PropTypes.string,
  __v: PropTypes.number,
  _id: PropTypes.string
});

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired
};



export {
  IngredientCard,
  ingredientPropTypes
};