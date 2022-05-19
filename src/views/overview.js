import React from "react";


const Overview = () => {
    // const { user } = useAuth0();
    // const { name, picture, email } = user;  
    return (
      <div>
        <div className="row pb-5">
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
      <div className="row">
      <div className="col-md-4 col-sm-12 mb-3">
        <iframe src="https://grafana.comdatech.xyz/d-solo/u_11G1Pnz/calibration-dashboard?orgId=1&from=now-2d&to=now&panelId=54" width="1000" height="200" frameBorder="0" title="dam-pipes"></iframe>
      </div>
      </div>
      </div>
    );
  };
  
  export default Overview;