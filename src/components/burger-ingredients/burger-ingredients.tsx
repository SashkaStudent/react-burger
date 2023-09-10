import IngredientCard from "../ingredient-card/ingredient-card";
import ingredientsStyle from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import IngredientsTab from "../ingredients-tab/ingredients-tab";
import React, { FC, useEffect, useMemo } from "react";
//import { useSelector, useDispatch } from "react-redux";
//import { CLICK_INGREDIENT, SWITCH_TAB } from "../../services/actions/burger-ingredients.js";
import { useInView } from "react-intersection-observer";
import { CLICK_INGREDIENT, SWITCH_TAB } from "../../services/types/action-constants";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { IIngredient } from "../../services/types/ingredient";
import { ITab } from "../../services/types/tab";
const BurgerIngredients:FC = () => {

  const [bunRef, bunInView] = useInView({ threshold: 0 });
  const [sauceRef, sauceInView] = useInView({ threshold: 0 });
  const [mainRef, mainInView] = useInView({ threshold: 0 });

  const dispatch = useDispatch();
  
  //const getIngredientsStore = store => store.ingredients;
 // const getConstructorIngredients = store => store.constructor.ingredients;
 // const getConstructorBun = store => store.constructor.bun;
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector( store => store.ingredients);
  const constructor = useSelector(store => store.constructor.ingredients);
  const bun = useSelector(store => store.constructor.bun);

  const handleOnIngredientChoose = (e:null, ingredient:IIngredient) => {
    dispatch({ type: CLICK_INGREDIENT, ingredient: ingredient });
  }

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

  const getCount = (id: string) => {
    if(!bun) return 0;
    if (id == bun._id) return 2;

    return constructor.filter(i => i._id === id).length;

  }



  const categories: ITab[] = [
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
      
      {/* defaultState={categories[0].value} */}
      <IngredientsTab tabs={categories} />
      <div className={ingredientsStyle.container}>

        {ingredientsFailed ? <p>Ошибка</p>
          :
          (ingredientsRequest ? <p>Загрузка</p> : content)}
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  handleOnIngredientChoose: PropTypes.func
};

export default BurgerIngredients;
