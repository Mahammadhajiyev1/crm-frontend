import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { loginSuccess } from "../login/loginSlice";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { fetchNewAccessJWT } from "../../api/userApi";
import { getUserProfile } from "../../pages/dashboard/userAction";

// const isAuth = true;
export const PrivateRoute = ({ component, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      console.log(result);
      result && dispatch(loginSuccess());
    };
    !user._id && dispatch(getUserProfile());
    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("crmTicket") &&
      updateAccessJWT();
    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [isAuth, dispatch, user._id]);

  return { ...rest } && isAuth ? (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ) : (
    <Navigate to='/' />
  );
};
