import { FC, useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { connect, disconnect } from "../../services/actions/profile-feed";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { WS_BASE_URL } from "../../utils/data";
import CardOrder from "../order/card-order";
import profileFeedStyles from "./profile-feed.module.css"


const ProfileFeed:FC = () => {
  const { orders } = useSelector(store => store.profileFeed.orders);

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(connect(`${WS_BASE_URL}?token=${localStorage.getItem("accessToken")?.slice(7)}`))
      return () => {
         dispatch(disconnect())
      }
  },[])

  return (
    <div className={profileFeedStyles.container}>
      {  orders && [...orders].reverse().map((item, id) => {
        return (
          <CardOrder isProfile={true} key={item._id+id} order={item} />
        )
      })} 
    </div>
  );
}

export default ProfileFeed;