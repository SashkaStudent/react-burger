import { useMemo } from "react";
import { useSelector } from "react-redux";
import statsStyles from "./stats-feed.module.css";

function StatsFeed() {

  const { orders, total, totalToday } = useSelector(store => store.orderFeed.orders);



  const ordersStatus = useMemo(() => {
    const done = orders?.filter(item => item.status === 'done');
    const work = orders?.filter(item => item.status !== 'done');
    return { done, work }
  }, [orders]);


  return (
    <div className={statsStyles.container}>
      <div className={statsStyles.statusContainer}>
        <div className={statsStyles.statusColumn}>
          <p className={`${statsStyles.statusHeader} text text_type_main-medium`}>Готовы:</p>
          <ul className={statsStyles.list}>
            {
              (ordersStatus?.done.slice(0, 15).map(item => { return (<li className={`${statsStyles.listItem} text text_type_digits-default`} key={item._id}>{item.number}</li>) }))
            }

          </ul>
        </div>

        <div className={statsStyles.statusColumn}>
          <p className={`${statsStyles.statusHeader} text text_type_main-medium`}>В работе:</p>
          <ul className={statsStyles.list}>
            {
              (ordersStatus?.work.map(item => {
                return (<li className={`${statsStyles.listItem} ${statsStyles.listItemPending} text text_type_digits-default`} key={item._id}>{item.number}</li>)
              }))
            }
          </ul>
        </div>
      </div>
      <div>
        <p className="text text_type_main-medium">Выполнено за всё время:</p>
        <p className="text text_type_digits-large">{total?.toLocaleString("ru-RU")}</p>
      </div>
      <div>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className="text text_type_digits-large">{totalToday}</p>
      </div>
    </div>
  )

}

export default StatsFeed;