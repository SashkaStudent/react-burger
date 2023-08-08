import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect, disconnect } from "../../services/actions/order-feed";
import CardOrder from "../order/card-order";
import orderFeedStyles from "./order-feed.module.css"


function OrderFeed() {
  const {orders, total, totalToday} = useSelector(store => store.orderFeed.orders);
  const dispatch = useDispatch();
console.log(orders);
  useEffect(() => {
      dispatch(connect("wss://norma.nomoreparties.space/orders/all"))
      return () => {
         dispatch(disconnect())
      }
  },[])

  return (
    <div className={orderFeedStyles.container}>
      {  orders && orders.map((item, id) => {
        return (
          <CardOrder key={item._id+id} order={item} />
        )
      })} 
    </div>
  );
}

export default OrderFeed;