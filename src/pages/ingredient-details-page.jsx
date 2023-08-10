import pagesStyle from "./pages.module.css"
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import IngredientDetails from "../components/ingredient-details/ingredient-details";

function IngredientDetailsPage() {
  const getIngredientsStore = store => store.ingredients;
  const { ingredients, choosedIngredient } = useSelector(getIngredientsStore);

  let ingredient = choosedIngredient;
  const {ingredientId} = useParams();
  if(!ingredient){
    ingredient = ingredients.find(item => item._id === ingredientId);
  }
  
  return (
    <div className={pagesStyle.contentDetails}>
      <IngredientDetails/>
    </div>
  );
}

export default IngredientDetailsPage;