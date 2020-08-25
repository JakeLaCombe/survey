import React from "react";
import "./Container.css";

const Container = ({ classes, children }) => {
  return <div className={`Container ${classes}`}>{children}</div>;
};

export default Container;
