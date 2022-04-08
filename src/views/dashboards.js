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
      <NavLink to="/level" className={"btn btn-success btn-lg btn-block"}>Dam Level</NavLink>
      <NavLink to="/pipes" className={"btn btn-warning btn-lg btn-block"}>Pipes and Release</NavLink>
      <NavLink to="/downstream" className={"btn btn-primary btn-lg btn-block"}>Down Stream Weir</NavLink>
      <NavLink to="/reports" className={"btn btn-info btn-lg btn-block"}>Reporting</NavLink>
      </div>
    </div>
  );
};

export default Dashboards;
