import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

const PipeFour = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
    <h2>Pipe Four</h2>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
          <iframe src="https://grafana.comdatech.xyz/d-solo/QrfhicPnk/da-gama-pipes?orgId=1&refresh=10m&from=now&to=now-6h&panelId=5" width="100%" height="500" frameBorder="0" title="Pipe 4"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
          <iframe src="https://grafana.comdatech.xyz/d-solo/QrfhicPnk/da-gama-pipes?orgId=1&refresh=15m&from=now&to=now-7d&panelId=11" width="100%" height="100%" frameborder="0" title="Pipe 4 Acc"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
          <iframe src="https://grafana.comdatech.xyz/d-solo/QrfhicPnk/da-gama-pipes?orgId=1&refresh=15m&from=now&to=now-7d&panelId=21" width="100%" height="350" frameborder="0" title="Pipe 3 History"></iframe>
        </div>
      </div>      
    </div>
  );
};

export default PipeFour;
