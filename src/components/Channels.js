import React from "react";
import CompLabel from "./CompLabel";

const Channels = props => (
  <div className="channels-component">
    <CompLabel label="Channels" />
    <div>{props.children}</div>
  </div>
);

export default Channels;
