import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

const Level = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
      <div className="row pb-2">
        <div className="col-md-4 col-sm-12 mb-3">
          <h2>Dam Level</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=now-1d&to=now&panelId=2" width="auto" height="100%" frameBorder="0" title="dam-level"></iframe>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
        <h2>Dam Percent Full</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=now-1d&to=now&panelId=3&tv=kiosk" width="auto" height="100%" title="dam-percent" frameBorder="0"></iframe>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
        <h2>Dam Volume</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=now-1d&to=now&panelId=13" width="auto" height="100%" frameBorder="0" title="dam-volume"></iframe>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 col-sm-12 mb-3">
        <h2>Volume Trendline - 30 Days</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=now-30d&to=now&panelId=5" width="100%" height="400" title="dam-table" frameBorder="0"></iframe>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 col-sm-12 mb-3">
        <h2>Level Trendline - 30 Days</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=now-30d&to=now&panelId=29" width="100%" height="400" title="dam-table" frameBorder="0"></iframe>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 col-sm-12 mb-3">
        <h2>Percentage Trendline - 30 Days</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=now-30d&to=now&panelId=30" width="100%" height="400" title="dam-table" frameBorder="0"></iframe>
        </div>
      </div>


    </div>
  );
};

export default Level;
