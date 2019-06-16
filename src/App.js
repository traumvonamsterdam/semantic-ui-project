import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ShowCase from "./components/showcase/ShowCase";
import HomePage from "./components/pages/HomePage";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Route name="showcase" exact path="/showcase" component={ShowCase} />
      <Route name="home" exact path="/" component={HomePage} />
      <Route name="login" exact path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
