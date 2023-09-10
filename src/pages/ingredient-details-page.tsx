import pagesStyle from "./pages.module.css"
//import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import { useSelector } from "../services/types/hooks";
import { FC } from "react";

const IngredientDetailsPage: FC = ()=> {
  
  const { ingredients, choosedIngredient } = useSelector(store => store.ingredients);

  let ingredient = choosedIngredient;
  const {ingredientId} = useParams();
  if(!ingredient){
    ingredient = ingredients.find(item => item._id === ingredientId)!;
  }
  
  return (
    <div className={pagesStyle.contentDetails}>
      <IngredientDetails/>
    </div>
  );
}

export default IngredientDetailsPage;