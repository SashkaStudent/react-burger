import pagesStyle from "./pages.module.css"
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import IngredientDetails from "../components/ingredient-details/ingredient-details";

function IngredientDetailsPage() {
  const location = useLocation();
  const getIngredientsStore = store => store.ingredients;

  const { ingredients, ingredientsRequest, ingredientsFailed, choosedIngredient } = useSelector(getIngredientsStore);
  //const getChoosedIngredient = store => store.ingredients.choosedIngredient;

  let ingredient = choosedIngredient;
  const {ingredientId} = useParams();
  if(!ingredient){
    ingredient = ingredients.find(item => item._id === ingredientId);
  }
  
//  if(!ingredient) ingredient = ingredient;
  return (
    <div className={pagesStyle.contentDetails}>
      <IngredientDetails/>
    </div>
  );
}

export default IngredientDetailsPage;