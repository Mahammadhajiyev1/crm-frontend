import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DefaultLayout } from "../../layout/DefaultLayout";

const isAuth = true;
export const PrivateRoute = ({ children, ...rest }) => {
  return { ...rest } && isAuth ? (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ) : (
    <Navigate to='/' />
  );
};
