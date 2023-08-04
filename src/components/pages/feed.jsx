import OrderFeed from "../order-feed/order-feed";
import StatsFeed from "../stats-feed/stats-feed";
import pagesStyle from "./pages.module.css";

function Feed() {
  return (
    <>
      <div className={pagesStyle.feedContainer}>
        <p className="text text_type_main-large">Лента заказов</p>
        <div className={pagesStyle.feedWrapper}>
          <OrderFeed></OrderFeed>
          <StatsFeed></StatsFeed>
        </div>
      </div>
    </>

  )
}

export default Feed;