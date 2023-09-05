import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component4 from "./components/Component4/Component4";
import Component6 from "./components/Component6/Component6";
import Component7 from "./components/Component7/Component7";
import Component5 from "./components/component5/Component5";

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

      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <Component4 />
        </div>
        <div className="col-sm-12 col-lg-6 ">
          <Component6 />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <Component5 />
        </div>
        <div className="col-sm-12 col-lg-6">
          <Component7 />
        </div>
      </div>

    </div>
  );
};

export default App;
