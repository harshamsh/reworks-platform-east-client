import React from "react";

export const Tag = (props) => {
  const { type, content } = props;

  return (
    <div className="tag">
      <small className={type}>{type === "size" ? "size" : "#id"}</small>
      <small>{content}</small>
    </div>
  );
};
