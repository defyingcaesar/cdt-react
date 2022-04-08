import React from "react";
import {NavLink} from "react-router-dom";

// import { useAuth0 } from "@auth0/auth0-react";

const Pipes = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
      <h2>Pipes And Release</h2>
        <div className="row">
        <NavLink to="/pipe-one" className={"btn btn-primary btn-lg"}>Pipe One</NavLink>
        <NavLink to="/pipe-two" className={"btn btn-primary btn-lg btn-block"}>Pipe Two</NavLink>
        <NavLink to="/pipe-three" className={"btn btn-primary btn-lg btn-block"}>Pipe Three</NavLink>
        <NavLink to="/pipe-four" className={"btn btn-primary btn-lg btn-block"}>Pipe Four</NavLink>
        <NavLink to="/pipe-five" className={"btn btn-primary btn-lg btn-block"}>Pipe Five</NavLink>
      </div>
    </div>
  );
};

export default Pipes;
