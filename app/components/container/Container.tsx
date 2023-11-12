import React from 'react';

const Container = ({
  classes,
  children,
}: {
  classes?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`mx-auto xl:w-[1140px] w-full px-2 xl:px-0 ${classes}`}>
      {children}
    </div>
  );
};
export default Container;
