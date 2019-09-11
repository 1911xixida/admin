import React from "react";
import "style/test.less";
import { Button } from "antd";
function App(props) {
  return (
    <div className="App">
      {props.children}
    </div>
  );
}

export default App;
