import React from "react";
import Base from "./Base";

const Home = ({
  title = "Home",
  description = "My Dashboard",
  className = "bg-dark text-white p-4 text-center",
  children,
}) => {
  return (
    <div>
      <Base />
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="card">
              <h1>Image1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
