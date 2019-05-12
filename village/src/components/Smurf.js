import React from 'react';
import { Button } from 'reactstrap';

import './smurf.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Button onClick={this.removeSmurfs}>Toss Smurf?</Button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
