import React from "react";
import classes from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const PublicLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.container}>
      <p>Public Layout</p>
      {children}
    </div>
  );
};

export default PublicLayout;
