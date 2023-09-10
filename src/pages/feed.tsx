import { FC } from "react";
import OrderFeed from "../components/order-feed/order-feed";
import StatsFeed from "../components/stats-feed/stats-feed";
import pagesStyle from "./pages.module.css";

const Feed: FC = () => {
  return (
      <div className={pagesStyle.feedContainer}>
        <p className="text text_type_main-large">Лента заказов</p>
        <div className={pagesStyle.feedWrapper}>
          <OrderFeed/>
          <StatsFeed/>
        </div>
      </div>
  )
}

export default Feed;