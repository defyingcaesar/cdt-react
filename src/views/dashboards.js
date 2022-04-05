import React from "react";
import {NavLink} from "react-router-dom";

// import { useAuth0 } from "@auth0/auth0-react";

const Dashboards = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
    <h2>Dashboards</h2>
      <div className="row">
      <a href="/level" class="btn btn-warning btn-lg btn-block">
        Dam Level
      </a>
      <NavLink to="/pipes">Pipes</NavLink>
      <a href="/downstream" class="btn btn-primary btn-lg btn-block">
        Downstream
      </a>
      <a href="/reports" class="btn btn-info btn-lg btn-block">
        Reporting
      </a>
      </div>
    </div>
  );
};

export default Dashboards;
