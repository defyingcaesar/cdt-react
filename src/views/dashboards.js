import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

const Dashboards = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
    <h2>Dam Level</h2>
      <div className="row">
        <div className="col mb-3">
          <iframe src="http://54.91.233.0:3000/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648919279696&to=1648940879696&panelId=2" width="450" height="200" frameborder="0" title="dam-level"></iframe>
        </div>
        <div className="col mb-3">
          <iframe src="http://54.91.233.0:3000/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648955723629&to=1648977323630&panelId=3" width="450" height="200" title="dam-percent" frameborder="0"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col mb-3">
          <iframe src="http://54.91.233.0:3000/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648951299291&to=1648972899291&panelId=7" width="500" height="500" title="dam-table" frameborder="0"></iframe>
        </div>
        <div className="col mb-3">
          <iframe src="http://54.91.233.0:3000/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648919279696&to=1648940879696&panelId=13" width="450" height="200" frameborder="0" title="dam-level"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
