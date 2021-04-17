import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./components/Layout.jsx";

class App extends React.Component {

  render(){
    return (
      <HashRouter >
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
      </HashRouter>
    );
  }
}

export default App;
