import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect, disconnect } from "../../services/actions/profile-feed";
import CardOrder from "../order/card-order";
import profileFeedStyles from "./profile-feed.module.css"


function ProfileFeed() {
  const {orders} = useSelector(store => store.profileFeed.orders);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(connect(`wss://norma.nomoreparties.space/orders?token=${localStorage.getItem("accessToken").slice(7)}`))
      return () => {
         dispatch(disconnect())
      }
  },[])

  return (
    <div className={profileFeedStyles.container}>
      {  orders && orders.toReversed().map((item, id) => {
        return (
          <CardOrder isProfile={true} key={item._id+id} order={item} />
        )
      })} 
    </div>
  );
}

export default ProfileFeed;