import React, { useEffect, useState } from "react";
import CompLabel from "./CompLabel";

const Copy = props => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCount(prev => prev + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="copy-component">
      <CompLabel label="Copy" />
      <div>
        {props.content} count: {count}
      </div>
    </div>
  );
};

export default Copy;
