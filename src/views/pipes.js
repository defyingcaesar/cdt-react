import React from "react";
import {NavLink} from "react-router-dom";

// import { useAuth0 } from "@auth0/auth0-react";

const Pipes = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
      <h2>Pipes 1 - 5</h2>
        <div className="row">
        
        <div class="btn btn-primary btn-lg btn-block">
        <NavLink to="/pipe-one">Pipe One</NavLink>
        </div>
        <a href="/pipe-two" class="btn btn-primary btn-lg btn-block">
          Pipe 2
        </a>
        <a href="/pipe-three" class="btn btn-primary btn-lg btn-block">
          Pipe 3
        </a>
        <a href="/pipe-four" class="btn btn-primary btn-lg btn-block">
          Pipe 4
        </a>
        <a href="/pipe-five" class="btn btn-primary btn-lg btn-block">
          Pipe 5
        </a>
      </div>
    </div>
  );
};

export default Pipes;
