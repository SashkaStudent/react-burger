import { useMemo } from "react";
import { useSelector } from "react-redux";
import statsStyles from "./stats-feed.module.css";

function StatsFeed() {

  const {orders, total, totalToday} = useSelector(store => store.orderFeed.orders);

let done = null, work = null;

  useMemo(()=>{
   done = orders?.filter(item => item.status === 'done');
   work = orders?.filter(item => item.status !== 'done');

  },[orders]);



  //console.log(done);
  return (
    <div className={statsStyles.container}>
      <div className={statsStyles.statusContainer}>
        <div className={statsStyles.statusColumn}>
          <p className={statsStyles.statusHeader}>Готовы:</p>
          <ul>
            {
              (done?.map(item => { return (<li key={item._id}>{item.number}</li>) }))

            }

          </ul>
        </div>

        <div className={statsStyles.statusColumn}>
          <p className={statsStyles.statusHeader}>В работе:</p>
          <ul>
            {
              (work?.map(item => { return (<li key={item._id}>{item.number}</li>) }))
            }
          </ul>
        </div>
      </div>
      <div>
        <p className={statsStyles.statusHeader}>Выполнено за всё время:</p>
        <p className={statsStyles.statusHeader}>{total?.toLocaleString("ru-RU")}</p>
      </div>
      <div>
        <p className={statsStyles.statusHeader}>Выполнено за сегодня:</p>
        <p className={statsStyles.statusHeader}>{totalToday}</p>
      </div>
    </div>
  )

}

export default StatsFeed;