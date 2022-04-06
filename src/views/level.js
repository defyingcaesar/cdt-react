import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

const Level = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
      <div className="row pb-2">
        <div className="col-md-4 col-sm-12 mb-3">
          <h2>Level</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648919279696&to=1648940879696&panelId=2" width="auto" height="100%" frameBorder="0" title="dam-level"></iframe>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
        <h2>Percentage</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648955723629&to=1648977323630&panelId=3" width="auto" height="100%" title="dam-percent" frameBorder="0"></iframe>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
        <h2>Volume</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648919279696&to=1648940879696&panelId=13" width="auto" height="100%" frameBorder="0" title="dam-level"></iframe>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 col-sm-12 mb-3">
        <h2>Trendline</h2>
          <iframe src="https://grafana.comdatech.xyz/grafana/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=1648764000000&to=1649089019952&panelId=5" width="100%" height="400" title="dam-table" frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Level;
