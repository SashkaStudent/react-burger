import { useMemo } from "react";
import { useSelector } from "react-redux";
import { cardOrderPropTypes } from "../../utils/types";
import Price from "../price/price";
import orderStyles from "./card-order.module.css";


function CardOrder({order}) {

  const getIngredientsStore = store => store.ingredients.ingredients;
  const ingredients = useSelector(getIngredientsStore);

 // console.log(Date.parse(order.createdAt));
  const d = new Date(order.createdAt);
  console.log(d);
  const orderIngredients = [];
  order.ingredients.map(item=>{
   orderIngredients.push(ingredients.find(ing => item === ing._id));
  });
  
  let price = 0;
  useMemo(()=>{
  price = orderIngredients.reduce((prev, curr)=> prev + curr.price, 0);
  },[orderIngredients])

  return (
    <div className={orderStyles.container}>
      <div><p>{"#"+order.number}</p> <p>{d.toLocaleDateString("ru-RU")}</p></div>
      <div><p>{order.name}</p></div>
      <div>
        {
          orderIngredients?.map((item,id)=>{return (
            <img key={item._id+id} src={item.image}></img>
          )
        })}
      <Price price={price} />
      </div>
    </div>
  );
}

CardOrder.propTypes = {
  order: cardOrderPropTypes.isRequired
}

export default CardOrder;