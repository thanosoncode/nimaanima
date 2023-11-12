import React from "react";

const Container = ({
  classes,
  children,
}: {
  classes?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`mx-auto w-full px-2 xl:w-[1140px] xl:px-0 ${classes}`}>
      {children}
    </div>
  );
};
export default Container;
