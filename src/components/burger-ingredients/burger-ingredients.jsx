import IngredientCard from "../ingredient-card/ingredient-card";
import ingredientsStyle from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import IngredientsTab from "../ingredients-tab/ingredients-tab";
import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLICK_INGREDIENT, getItems, SWITCH_TAB } from "../../services/actions/burger-ingredients.js";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
function BurgerIngredients() {

  const [bunRef, bunInView] = useInView({ threshold: 0 });
  const [sauceRef, sauceInView] = useInView({ threshold: 0 });
  const [mainRef, mainInView] = useInView({ threshold: 0 });

  const dispatch = useDispatch();
  
  const getIngredientsStore = store => store.ingredients;
  const getConstructorIngredients = store => store.constructor.ingredients;
  const getConstructorBun = store => store.constructor.bun;
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(getIngredientsStore);
  const constructor = useSelector(getConstructorIngredients);
  const bun = useSelector(getConstructorBun);
  const navigate = useNavigate();
  const handleOnIngredientChoose = (e, ingredient) => {
 //   navigate('/ingredients/id123231132');
    dispatch({ type: CLICK_INGREDIENT, ingredient: ingredient });
  }


  useEffect(() => {
    dispatch(getItems());

  }, []);

  useEffect(
    () => {
      if (bunInView) {
        dispatch({
          type: SWITCH_TAB,
          tab: 'bun'
        })
      } else if (sauceInView) {
        dispatch({
          type: SWITCH_TAB,
          tab: 'sauce'
        })
      } else if (mainInView) {
        dispatch({
          type: SWITCH_TAB,
          tab: 'main'
        })
      }
    }, [bunInView, sauceInView, mainInView])

  const getCount = (id) => {
    if (id == bun._id) return 2;

    return constructor.filter(i => i._id === id).length;

  }

  const categories = [
    { value: "bun", text: "Булки", ref: bunRef },
    { value: "sauce", text: "Соусы", ref: sauceRef },
    { value: "main", text: "Начинки", ref: mainRef },
  ];

  const content = useMemo(() => {
    return (
      categories.map((category) => (
        <React.Fragment key={category.value}>

          <h2 ref={category.ref} id={category.value} className="text text_type_main-medium">
            {category.text}
          </h2>

          <div className={`${ingredientsStyle.category} pt-6 pl-4`}>
            {ingredients
              .filter((value) => value.type === category.value)
              .map((element) => {

                return (
                  <IngredientCard
                    ingredient={element}
                    key={element._id}
                    counter={getCount(element._id)}
                    handleCardOnClick={handleOnIngredientChoose}
                  />
                );
              })}
          </div>
        </React.Fragment>
      )));
  }
    , [ingredients, constructor, bun]);

  return (
    <div className={ingredientsStyle.ingredients}>
      <h2 className="pt-10 text text_type_main-large">Соберите бургер</h2>

      <IngredientsTab tabs={categories} defaultState={categories[0].value} />

      <div className={ingredientsStyle.container}>

        {ingredientsFailed ? <p>Ошибка</p>
          :
          (ingredientsRequest ? <p>Загрузка</p> : content)}
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  // data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  handleOnIngredientChoose: PropTypes.func
};

export default BurgerIngredients;
