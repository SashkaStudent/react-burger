import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import IngredientPreview from "../components/ingredient-preview/ingredient-preview";
import Price from "../components/price/price";
import { connect, disconnect } from "../services/actions/order-feed";
import { connect as profileConnect, disconnect as profileDisconnect } from "../services/actions/profile-feed";
import { useDispatch, useSelector } from "../services/types/hooks";
import { IIngredient } from "../services/types/ingredient";
import { WS_BASE_URL } from "../utils/data";
import pagesStyle from "./pages.module.css"



const OrderFeedDetails: FC = () => {
  const dispatch = useDispatch();
  const feedOrders = useSelector(store => store.orderFeed.orders);
  const profileOrders = useSelector(store => store.orderFeed.orders);

  const { ingredients } = useSelector(store => store.ingredients);
  const { id } = useParams();

  const allOrders = useMemo(() => {
    if (feedOrders.orders && profileOrders.orders) return [...feedOrders.orders, ...profileOrders.orders]
    else if (feedOrders.orders) return feedOrders.orders;
    else return [];

  }, [feedOrders.orders, profileOrders.orders]);

  const selectedOrder = allOrders && allOrders.find(item => item._id === id);


  const wsInitOrderFeed = () => {
    dispatch(connect(`${WS_BASE_URL}/all`));
    dispatch(profileConnect(`${WS_BASE_URL}?token=${localStorage.getItem("accessToken")?.slice(7)}`));

    return () => {
      dispatch(disconnect());
      dispatch(profileDisconnect());
    }
  }

  const result = (status: string) => {
    switch (status) {
      case "done": return "Выполнен";
      case "pending": return "Готовится";
      case "created": return "Создан";
    }
  }

  const resultStyle = selectedOrder?.status === 'done' ? pagesStyle.statusDone : '';

  useEffect(() => {
    wsInitOrderFeed();
  }, []);

  type TCountedIngredient = {
    ingredient: IIngredient;
    count: number;
  }

  const {totalPrice, ingredientsInOrder}  = useMemo(() => {

    if (!selectedOrder || !ingredients) return { totalPrice: 0, ingredientsInOrder: [] };

    const indexList = selectedOrder.ingredients;
    const ingredientsInOrder: IIngredient[] = [];
    indexList.map((id) => ingredientsInOrder.push(ingredients.find((item) => item._id === id)!));
    const sum: number = ingredientsInOrder.reduce((prev, curr) => {
      prev += curr.price;
      return prev;
    }, 0);

    const uniqueIngredients = new Map<IIngredient, number>();

    ingredientsInOrder.forEach(item => {
      if (uniqueIngredients.has(item)) {
        const count = uniqueIngredients.get(item)! + 1;
        uniqueIngredients.set(item, count);
      } else {
        uniqueIngredients.set(item, 1);
      }
    });

    const countedIngredients: TCountedIngredient[] = [];
    uniqueIngredients.forEach((value, item) => {
      countedIngredients.push({ ingredient: item, count: value });
    });

    countedIngredients.sort((a, b) => { if (a.ingredient.type === 'bun') return -1; else return 1 })

    const result = { totalPrice: sum, ingredientsInOrder: countedIngredients };

    return result;

  }, [selectedOrder, ingredients]);

  return (
    <div className={pagesStyle.feedDetailsContainer}>
      {selectedOrder && (
        <>
          <p className={`text text_type_digits-default ${pagesStyle.feedDetailsNumber}`}>#{selectedOrder.number}</p>
          <p className="text text_type_main-medium pt-10">{selectedOrder.name}</p>
          <p className={`text text_type_main-default pt-3 ${resultStyle}`}>{result(selectedOrder.status)}</p>
          <p className="text text_type_main-medium pt-10 pb-6">Состав:</p>
          <div className={pagesStyle.ingredientsContainer}>
            {ingredientsInOrder.map((item, index) => {

              return (
                <div className={pagesStyle.ingredientRow} key={item.ingredient._id + "" + index}>
                  <IngredientPreview alt={item.ingredient.name} src={item.ingredient.image} remaining={0} />
                  <p className="text text_type_main-default pl-4">{item.ingredient.name}</p>
                  <div className={pagesStyle.ingredientPrice}>
                    <p className="text text_type_digits-default">{`${item.count} x`}</p>
                    <Price price={item.ingredient.price} />
                  </div>
                </div>
              )
            })}
          </div>
          <div className={`pt-10 ${pagesStyle.summary}`}>
            <FormattedDate className="text text_type_main-default text_color_inactive" date={new Date(selectedOrder.updatedAt)} />
            <Price price={totalPrice} />
          </div>
        </>
      )}
    </div>
  );
}

export default OrderFeedDetails;