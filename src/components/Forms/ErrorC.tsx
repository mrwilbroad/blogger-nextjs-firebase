import React, { FC } from "react";

interface TT {
  children?: React.ReactNode;
}

const ErrorC = ({ children } : TT) => {
  return <div className="text-danger">{children}</div>;
};

export default ErrorC;
