import detailsStyles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";

function IngredientDetails() {
  const getChoosedIngredient = store => store.ingredients.choosedIngredient;
  const ingredient = useSelector(getChoosedIngredient);

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
}

export default IngredientDetails;