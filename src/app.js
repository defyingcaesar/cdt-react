import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, Dashboards, Level, Pipes, PipeOne, PipeTwo, PipeThree, PipeFour, PipeFive, Downstream } from "./views";
import Inflow from "./views/inflow";
import Reports from "./views/reports";
import Overview from "./views/overview";
import ProtectedRoute from "./auth/protected-route";

import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/dashboards" component={Dashboards} />
          <ProtectedRoute path="/level" component={Level} />
          <ProtectedRoute path="/inflow" component={Inflow} />
          <ProtectedRoute path="/pipes" component={Pipes} />
          <ProtectedRoute path="/pipe-one" component={PipeOne} />
          <ProtectedRoute path="/pipe-two" component={PipeTwo} />
          <ProtectedRoute path="/pipe-three" component={PipeThree} />
          <ProtectedRoute path="/pipe-four" component={PipeFour} />
          <ProtectedRoute path="/pipe-five" component={PipeFive} />
          <ProtectedRoute path="/downstream" component={Downstream} />
          <ProtectedRoute path="/reports" component={Reports} />
          <ProtectedRoute path="/overview" component={Overview} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
