import React from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <Component1 />
        </div>
        <div className="col-12 col-lg-6">
          <Component2 />
        </div>
      </div>
    </div>
  );
};

export default App;
