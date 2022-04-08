import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

const PipeFive = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
    <h2>Pipe Five</h2>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
          <iframe src="https://grafana.comdatech.xyz/d-solo/QrfhicPnk/da-gama-pipes?orgId=1&refresh=15m&from=now-1d&to=now&panelId=6" width="100%" height="500" frameBorder="0" title="Pipe 1"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
          <iframe src="https://grafana.comdatech.xyz/d-solo/QrfhicPnk/da-gama-pipes?orgId=1&refresh=15m&from=1649068452788&to=1649154852788&panelId=12" width="100%" height="100%" frameborder="0" title="Pipe 1 Acc"></iframe>
        </div>
      </div>
    </div>
  );
};

export default PipeFive;
