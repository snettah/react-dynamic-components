import React from "react";
import hljs from "highlight.js";

// Utility component to highlight JSON of
// current page using:
// https://github.com/isagalaev/highlight.js

class Highlight extends React.Component {
  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight = () => {
    try {
      hljs.highlightBlock(this.refs.code);
    } catch (e) {
      console.log(hljs, window.hljs);
    }
  };

  render() {
    return (
      <div className="highlightjs-component">
        <p>
          <b>JSON for currently rendered page</b>
        </p>
        <pre>
          <code className="json" ref="code">
            {JSON.stringify(this.props.code, null, 2)}
          </code>
        </pre>
      </div>
    );
  }
}

export default Highlight;
