import React from "react";
import { useSelector } from "react-redux";

export const Alert = () => {
  const text = useSelector(state => state.app.alert);

  return (
    <div className="alert alert-danger" role="alert">
      {text}
    </div>
  );
};
