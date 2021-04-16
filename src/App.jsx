import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

class App extends React.Component {

  render(){
    return (
      <HashRouter >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
