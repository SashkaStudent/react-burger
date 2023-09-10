import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Price from "../price/price";
import cardStyles from "./ingredient-card.module.css";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../utils/types";
import { useDrag } from "react-dnd"
import { Link, useLocation } from "react-router-dom";
import { FC } from "react";
import { IIngredient } from "../../services/types/ingredient";

type TIngredientCard = {
  ingredient: IIngredient;
  counter: number;
  handleCardOnClick: Function;
}

const IngredientCard:FC<TIngredientCard> = ({ ingredient, counter, handleCardOnClick }) => {
  const location = useLocation();
  const type = ingredient.type === "bun"? "bun" : "ingredient"
  const [,dragRef] = useDrag({
    type:type,
    item:ingredient
  });

  return (
    <Link
      key={ingredient._id}
      to={`/ingredients/${ingredient._id}`}
      state={{ background: location }}
      className={cardStyles.link}>
    <div className={`${cardStyles.card}`} ref={dragRef} onClick={(e)=>handleCardOnClick(e, ingredient)}>
      <img
        className={`${cardStyles.image}`}
        src={ingredient.image}
        alt={ingredient.name}
      />
      {counter > 0 && (
        <Counter count={counter} size="default" />
      )}
      <Price size="medium" price={ingredient.price} extraClass="pt-2 pb-2" />
      <p className="text text_type_main-default">{ingredient.name}</p>
    </div>
    </Link>
  );
}

// IngredientCard.propTypes = {
//   ingredient: ingredientPropTypes.isRequired,
//   counter: PropTypes.number.isRequired,
//   handleCardOnClick: PropTypes.func
// };

export default IngredientCard;
