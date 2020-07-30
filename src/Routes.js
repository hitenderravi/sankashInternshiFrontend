import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./home/Home";
import Home2 from "./home/Home2";
import Home3 from "./home/home3";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/home" exact component={Home} />
        <Route path="/home2" exact component={Home2} />
        <Route path="/home3" exact component={Home3} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
