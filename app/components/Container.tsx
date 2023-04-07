import React from "react";

const Container = ({
  classes,
  children,
}: {
  classes?: string;
  children: React.ReactNode;
}) => {
  return <div className={`w-3/4 mx-auto ${classes}`}>{children}</div>;
};
export default Container;
