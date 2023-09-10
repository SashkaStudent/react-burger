import { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { connect, disconnect } from "../../services/actions/order-feed";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { WS_BASE_URL } from "../../utils/data";
import CardOrder from "../order/card-order";
import orderFeedStyles from "./order-feed.module.css"


function OrderFeed() {
  const {orders} = useSelector(store => store.orderFeed.orders);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(connect(`${WS_BASE_URL}/all`))
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