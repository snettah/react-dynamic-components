import React from "react";
// const Channels = React.lazy(() => import("./components/Channels"));
// const Copy = React.lazy(() => import("./components/Copy"));
// const Cover = React.lazy(() => import("./components/Cover"));
// const Twitter = React.lazy(() => import("./components/Twitter"));
// const Link = React.lazy(() => import("./components/Link"));
// const Button = React.lazy(() => import("@material-ui/core/Button"));
// const Button = React.lazy(() => import("./components/Button"));
// const Grid = React.lazy(() => import("@material-ui/core/Grid"));
import Form from "./components/Form";
import * as stock from "@material-ui/core";

// const enhance = Component => {
//   return function({ children, ...rest }) {
//     return <Component {...rest}>{children}</Component>;
//   };
// };

// const stock = {
//   Channels,
//   Copy,
//   Cover,
//   Link,
//   Twitter,
//   Button,
//   Grid
// };

const components = {
  ...stock,
  Form
};

var ID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

const mapChildren = children => {
  if (!children) return null;

  if (typeof children === "object") {
    return Array.isArray(children) ? children.map(c => createElement(c)) : createElement(children);
  }

  return children;
};

const createElement = block =>
  React.createElement(
    components[block.component] || block.component,
    { ...block.props, key: ID() },
    mapChildren(block.props.children)
  );

export default block => {
  // if (typeof components[block.component] !== "undefined") {
  return createElement(block);
  // }
  // return React.createElement(() => <div>The component {block.component} has not been created yet.</div>, {
  //   key: block.id
  // });
};
