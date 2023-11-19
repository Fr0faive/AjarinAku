import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../services/auth.context";

const GuestRoute = ({ element, path }) => {
  const { token } = useAuth();

  return token ? (
    <Navigate to="/" replace />
  ) : (
    <Route path={path} element={element} />
  );
};

export default GuestRoute;
