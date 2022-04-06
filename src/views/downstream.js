import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

const Downstream = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
    <h2>Downstream</h2>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
        <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1640988000000&to=1672523999999&panelId=27" width="100%" height="450" frameborder="0" title="downstream"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">

        </div>
      </div>
    </div>
  );
};

export default Downstream;
