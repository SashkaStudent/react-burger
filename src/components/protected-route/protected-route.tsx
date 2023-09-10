import { FC, useEffect, useMemo } from "react";
//import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../../services/types/hooks";

type TProtectedRoute = {
  onlyUnAuth?: boolean;
  component: JSX.Element;
}

const Protected: FC<TProtectedRoute> = ({ onlyUnAuth = false, component }) => {
  const location = useLocation();
  const user = useSelector(state => state.user.name);
  let token = localStorage.getItem("accessToken");
  useEffect(() => {
    token = localStorage.getItem("accessToken");
  }, [user])

  if (onlyUnAuth && token) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = Protected;


export const OnlyUnAuth: FC<{component:JSX.Element}> = ({ component }) => (
  <Protected onlyUnAuth={true} component={component} />
);