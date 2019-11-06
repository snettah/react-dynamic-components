import React from "react";
import CompLabel from "./CompLabel";

const Cover = props => (
  <div className="cover-component">
    <CompLabel label="Cover" />
    <h1 className="cover-head">{props.head}</h1>
    <p className="cover-byline">{props.byline}</p>
  </div>
);

export default Cover;
