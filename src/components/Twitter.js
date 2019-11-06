import React from "react";
import CompLabel from "./CompLabel";

const Twitter = props => (
  <div className="twitter-component">
    <CompLabel label="Twitter" />
    <div>
      Twitter:&nbsp;
      <a href={`https://twitter.com/${props.handle}`} target="_blank" rel="noopener noreferrer">
        @{props.handle}
      </a>
    </div>
  </div>
);

export default Twitter;
