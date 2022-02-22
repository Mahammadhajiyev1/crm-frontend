import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { loginSuccess } from "../login/loginSlice";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { fetchNewAccessJWT } from "../../api/userApi";

// const isAuth = true;
export const PrivateRoute = ({ component, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };
    updateAccessJWT();
    sessionStorage.getItem("accesJWT") && dispatch(loginSuccess());
  }, [isAuth, dispatch]);

  return { ...rest } && isAuth ? (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ) : (
    <Navigate to='/' />
  );
};
