import detailsStyles from "./ingredient-details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "../../services/types/hooks";
import { IIngredient } from "../../services/types/ingredient";
import { FC } from "react";

const IngredientDetails: FC = () => {
  const { ingredients, choosedIngredient } = useSelector(store => store.ingredients);

  let ingredient: IIngredient | undefined | null = choosedIngredient;
  const {ingredientId} = useParams();
  if(!ingredient){
    ingredient = ingredients.find(item => item._id === ingredientId);
  }
  if(ingredient)
  return (
    <>
      <p className={`pt-10 text text_type_main-large ${detailsStyles.details}`}>
        Детали ингредиента
      </p>
      <img className={detailsStyles.image} src={ingredient.image_large} alt={ingredient.name}/>
      <p className={`text text_type_main-medium pt-4`}>
        {ingredient.name}
      </p>
      <div className={`${detailsStyles.composition} pt-8 pb-15`}>
        <p
          className={`${detailsStyles.element} text text_type_main-default text_color_inactive`}
        >
          Калории,ккал <span className={`${detailsStyles.value} text_type_digits-default pt-2`}>{ingredient.calories}</span>
        </p>
        <p
          className={`${detailsStyles.element} text text_type_main-default text_color_inactive`}
        >
          Белки, г <span className={`${detailsStyles.value} text_type_digits-default pt-2`}>{ingredient.proteins}</span>
        </p>
        <p
          className={`${detailsStyles.element} text text_type_main-default text_color_inactive`}
        >
          Жиры, г <span className={`${detailsStyles.value} text_type_digits-default pt-2`}>{ingredient.fat}</span>
        </p>

        <p
          className={`${detailsStyles.element} text text_type_main-default text_color_inactive`}
        >
          Углеводы, г <span className={`${detailsStyles.value} text_type_digits-default pt-2`}>{ingredient.carbohydrates}</span>
        </p>
      </div>
    </>
  );
  else return (<></>)
}

export default IngredientDetails;