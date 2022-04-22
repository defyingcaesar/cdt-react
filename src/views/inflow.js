import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

const Inflow = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
    <h2>Inflow</h2>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
          <iframe src="https://grafana.comdatech.xyz/d-solo/u_11G1Pnz/calibration-dashboard?orgId=1&refresh=15m&from=now&to=now-7d&panelId=44" width="100%" height="350" frameborder="0" title="Pipe 3 History"></iframe>
        </div>
      </div>  
    </div>
  );
};

export default Inflow;
