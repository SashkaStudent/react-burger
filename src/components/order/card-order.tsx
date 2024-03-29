import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../services/types/hooks";
import { IIngredient } from "../../services/types/ingredient";
import { IOrder } from "../../services/types/order";
import IngredientPreview from "../ingredient-preview/ingredient-preview";
import Price from "../price/price";
import orderStyles from "./card-order.module.css";

type TCardOrder = {
  order: IOrder;
  isProfile?: boolean;
}

const CardOrder: FC<TCardOrder> = ({ order, isProfile }) => {

  const ingredients = useSelector(store => store.ingredients.ingredients);
  const location = useLocation();

  const d = new Date(order.updatedAt);
  const orderIngredients: IIngredient[] = [];
  const result = (status: string) => {
    switch (status) {
      case "done": return "Выполнен";
      case "pending": return "Готовится";
      case "created": return "Создан";
    }
  }

  const uniqueIngredients: IIngredient[] = [];



  order.ingredients.map(item => {
    const ingredient = ingredients.find(ing => item === ing._id);
    ingredient && orderIngredients.push(ingredient);
  });

  let price = 0;
  useMemo(() => {
    price = orderIngredients.reduce((prev, curr) => prev + curr.price, 0);

    orderIngredients.forEach(item => {
      if (!uniqueIngredients.includes(item)) {
        uniqueIngredients.push(item);
      }
    });

    uniqueIngredients.sort((a, b) => { if (a.type === 'bun') return 1; else return -1 })

  }, [orderIngredients])

  const name = order.name.length > 36 ? order.name.slice(0, 35) + "..." : order.name;

  return (
    <Link to={`${location.pathname}/${order._id}`} state={{background:location}} className={orderStyles.link}>
      <div className={orderStyles.container}>
        <div className={orderStyles.info}>
          <p className="text text_type_digits-default">{"#" + order.number}</p>
          <FormattedDate date={d} className="text text_type_main-default text_color_inactive" />
        </div>
        <div>
          <p className={`${orderStyles.name} text text_type_main-medium`}>{name}</p>
          {isProfile && <p className="text text_type_main-default pt-2">{result(order.status)}</p>}
        </div>

        <div className={orderStyles.ingredientRow}>
          <div className={orderStyles.containerIngredientPreview}>
            {

              uniqueIngredients?.map((item, index) => {
                if (index == 0) {
                  return (<IngredientPreview key={item._id + index} alt={item.name} src={item.image} remaining={orderIngredients.length - 5} />);
                }
                if (index > 5) return;


                return (
                  <IngredientPreview key={item._id + index} alt={item.name} src={item.image} remaining={0} />
                )
              })}
          </div>
          <Price price={price} />
        </div>
      </div>
    </Link>
  );
}

export default CardOrder;