import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../services/auth.context";

const ProtectedRoute = ({ element, path }) => {
  const { token } = useAuth();

  return token ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
