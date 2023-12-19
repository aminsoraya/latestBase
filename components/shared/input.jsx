import React from "react";

const Input = (props) => {
  let { className, ...otherAttr } = props;
  return <input {...otherAttr} type="text" className={`w-100 input ${className ?? ""}`} />;
};

export default Input;
