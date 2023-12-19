import React from "react";

const TextArea = (
  props
) => {
  let { className, ...otherAttr } = props;
  return (
    <textarea
      {...otherAttr}
      className={`area w-100 ${className ?? ""}`}
    />
  );
};

export default TextArea;
