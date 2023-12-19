import React from "react";

const Input = (props) => {
  let { className, ...otherAttr } = props;
  return <input {...otherAttr} className={`w-100 input ${className ?? ""}`} />;
};

export default Input;
