import IngredientCard from "../ingredient-card/ingredient-card";
import ingredientsStyle from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import ingredientPropTypes from "../../utils/types";
import IngredientsTab from "../ingredients-tab/ingredients-tab";

function BurgerIngredients(props) {
  // let categories = [...new Set(data.reduce((prev, curr)=>[...prev, curr.type],[]))];
  // console.log(data);
  const categories = [
    { value: "bun", text: "Булки" },
    { value: "sauce", text: "Соусы" },
    { value: "main", text: "Начинки" },
  ];
  return (
    <div className={ingredientsStyle.ingredients}>
      <h2 className="pt-10 text text_type_main-large">Соберите бургер</h2>

      <IngredientsTab tabs={categories} defaultState={categories[0].value} />

      <div className={ingredientsStyle.container}>
        {categories.map((category) => (
          <>
            <h2 id={category.value} className="text text_type_main-medium">
              {category.text}
            </h2>
            <div className={`${ingredientsStyle.category} pt-6 pl-4`}>
              {props.data
                .filter((value) => value.type === category.value)
                .map((element) => {
                  return (
                    <IngredientCard
                      ingredient={element}
                      key={element._id}
                      counter={1}
                    />
                  );
                })}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export default BurgerIngredients;
