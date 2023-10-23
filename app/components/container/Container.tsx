import React from "react";

const Container = ({
  classes,
  children,
}: {
  classes?: string;
  children: React.ReactNode;
}) => {
  return <div className={`mx-auto ${classes}`}>{children}</div>;
};
export default Container;
