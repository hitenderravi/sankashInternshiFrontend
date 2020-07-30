import React from "react";
import Home from "./Home";
import Base from "./Base";
const Home2 = () => {
  return (
    <div>
      <Base />
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="card">
              <h1>Image1</h1>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="card">
              <h1>Image2</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
