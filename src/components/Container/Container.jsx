import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={`max-w-screen-lg mx-auto ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Container;
