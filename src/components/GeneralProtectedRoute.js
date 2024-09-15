import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GeneralProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user.user);
  return user ? <Navigate to="/browse" /> : children;
};

export default GeneralProtectedRoute;
