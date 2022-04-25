import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

const PipeOne = () => {
  
  const options = [
    { label: '1d', value: 'now=now-1d' },
    { label: '2d', value: 'to=now-2d' },
    { label: '3d', value: 'to=now-3d' },
  ];

  const [value, setValue] = React.useState('fruit');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Dropdown
        label="Time Range To Apply "
        options={options}
        value={value}
        onChange={handleChange}
      />
        <h2>Pipe One</h2>
          <div className="row">
            <div className="col-md-12 col-sm-12 mb-3">
              <iframe src={`https://grafana.comdatech.xyz/d-solo/QrfhicPnk/da-gama-pipes?orgId=1&refresh=10m&from=now&to=now-1d&panelId=2&`} width="100%" height="500" frameBorder="0" title="Pipe 1 Current"></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 mb-3">
              <iframe src="https://grafana.comdatech.xyz/d-solo/QrfhicPnk/da-gama-pipes?orgId=1&refresh=15m&from=now&to=now-7d&panelId=8" width="100%" height="100%" frameborder="0" title="Pipe 1 Acc 24h"></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 mb-3">
              <iframe src={`https://grafana.comdatech.xyz/d-solo/QrfhicPnk/da-gama-pipes?orgId=1&refresh=15m&from=now&${options.value}&panelId=18`} width="100%" height="350" frameborder="0" title="Pipe 1 History"></iframe>
            </div>
          </div>
    </div>
  );
};
const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default PipeOne;
