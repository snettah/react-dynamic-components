import React from "react";
import CompLabel from "./CompLabel";

const Copy = props => (
  <div className="copy-component">
    <CompLabel label="Copy" />
    <div>{props.content}</div>
  </div>
);

export default Copy;
