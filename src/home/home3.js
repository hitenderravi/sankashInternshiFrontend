import React from "react";
import Base from "./Base";

const Home = () => {
  return (
    <div>
      <Base />
      <div className="container ">
        <div className="col-md-6 offset-sm-3 ">
          <div className="card">
            <h1>Image2</h1>
          </div>
        </div>
        <div className="col-md-6 offset-sm-3 ">
          <div className="card">
            <h1>Image3</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
