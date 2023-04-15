import IngredientCard from "../ingredient-card/ingredient-card";
import ingredientsStyle from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
//import ingredientPropTypes from "../../utils/types";
import IngredientsTab from "../ingredients-tab/ingredients-tab";
import React, { useEffect, useMemo } from "react";
//import { ConstructorContext, IngredientsContext } from "../../services/constructorContext";
import {useSelector, useDispatch} from "react-redux";
import { getItems } from "../../services/actions/burger-ingredients.js";
function BurgerIngredients({handleOnIngredientChoose}) {

  // const {bun, ingredients} = useContext(ConstructorContext);
 // const data = useContext(IngredientsContext);
 
  const dispatch = useDispatch();
  const {ingredients, ingredientsRequest, ingredientsFailed} = useSelector(store=> store.ingredients);
  console.log(useSelector(store=> store));
  
  useEffect(()=>{
    dispatch(getItems());
  }, [dispatch]);

  const getCount = (id)=>{
  //  if(id == bun._id) return 2;
    
    return ingredients.filter(i => i._id == id).length;

  }

  const categories = [
    { value: "bun", text: "Булки" },
    { value: "sauce", text: "Соусы" },
    { value: "main", text: "Начинки" },
  ];

const content = useMemo(()=>{ return (
  categories.map((category) => (
    <React.Fragment key={category.value}>
      <h2 id={category.value} className="text text_type_main-medium">
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
  )));}
  ,[ingredients]);

  return (
    <div className={ingredientsStyle.ingredients}>
      <h2 className="pt-10 text text_type_main-large">Соберите бургер</h2>

      <IngredientsTab tabs={categories} defaultState={categories[0].value} />

      <div className={ingredientsStyle.container}>
        
        {ingredientsFailed?<p>Ошибка</p>
        :
        (ingredientsRequest?<p>Загрузка</p>:content)}
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
 // data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  handleOnIngredientChoose: PropTypes.func
};

export default BurgerIngredients;
