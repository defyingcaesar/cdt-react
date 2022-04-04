import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

const Pipes = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
    <h2>Pipe Release</h2>
      <div className="row">
        <div className="col-md-4 col-sm-12 mb-3">
          <iframe src="http://3.230.79.223:3000/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648919279696&to=1648940879696&panelId=2" width="auto" height="100%" frameBorder="0" title="dam-level"></iframe>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
          <iframe src="http://3.230.79.223:3000/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648955723629&to=1648977323630&panelId=3" width="auto" height="100%" title="dam-percent" frameBorder="0"></iframe>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
          <iframe src="http://3.230.79.223:3000/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648919279696&to=1648940879696&panelId=13" width="auto" height="100%" frameBorder="0" title="dam-level"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-3">
          <iframe src="http://3.230.79.223:3000/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648951299291&to=1648972899291&panelId=7" width="100%" height="400" title="dam-table" frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Pipes;
