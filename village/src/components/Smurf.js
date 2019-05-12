import PropTypes from "prop-types";
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

Smurf.propTypes = {
  age: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string
}

Smurf.defaultProps = {
  id: 0,
  name: '',
  height: '',
  age: ''
};

export default Smurf;
