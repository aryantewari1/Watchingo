import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const BrowseProtectedRoute = ({ children, redirectedTo = "/login" }) => {
  const user = useSelector((store) => store.user.user);
  return user ? children : <Navigate to={redirectedTo} replace />;
};

export default BrowseProtectedRoute;
