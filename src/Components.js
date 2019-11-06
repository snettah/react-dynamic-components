import React from "react";
const Channels = React.lazy(() => import("./components/Channels"));
const Copy = React.lazy(() => import("./components/Copy"));
const Cover = React.lazy(() => import("./components/Cover"));
const Twitter = React.lazy(() => import("./components/Twitter"));
const Link = React.lazy(() => import("./components/Link"));
const Button = React.lazy(() => import("./components/Button"));

const stock = {
  Channels,
  Copy,
  Cover,
  Link,
  Twitter,
  Button
};

const createElement = block =>
  React.createElement(
    stock[block.component],
    block.props,
    ((block.props || {}).children || []).map(c => createElement(c))
  );

export default block => {
  console.log("block: ", block);
  if (typeof stock[block.component] !== "undefined") {
    return createElement(block);
  }
  return React.createElement(() => <div>The component {block.component} has not been created yet.</div>, {
    key: block.uid
  });
};
