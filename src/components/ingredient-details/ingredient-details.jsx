import React from "react";
import modalStyles from "../modal/modal.module.css";

function IngredientDetails({ingredient}) {
  return (
    <>
      <p className={`${modalStyles.details} pt-10  text text_type_main-large`}>
        Детали ингредиента
      </p>
      <p className={`text text_type_main-medium pt-4`}>
        {ingredient.name}
      </p>
      <img src={ingredient.image_large} alt="Изображение ингредиента."/>
      <div className={`${modalStyles.composition} pt-8 pb-15`}>
        <p
          className={`${modalStyles.element} text text_type_main-default text_color_inactive`}
        >
          Калории,ккал <span className={modalStyles.value}>{ingredient.calories}</span>
        </p>
        <p
          className={`${modalStyles.element} text text_type_main-default text_color_inactive`}
        >
          Белки, г <span className={modalStyles.value}>{ingredient.proteins}</span>
        </p>
        <p
          className={`${modalStyles.element} text text_type_main-default text_color_inactive`}
        >
          Жиры, г <span className={modalStyles.value}>{ingredient.fat}</span>
        </p>

        <p
          className={`${modalStyles.element} text text_type_main-default text_color_inactive`}
        >
          Углеводы, г <span className={modalStyles.value}>{ingredient.carbohydrates}</span>
        </p>
      </div>
    </>
  );
}


export default IngredientDetails;