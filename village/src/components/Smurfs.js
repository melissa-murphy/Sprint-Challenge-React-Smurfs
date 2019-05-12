import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import axios from 'axios';

import Smurf from './Smurf';
import { Row, Col, Media } from 'reactstrap';
import smurfHouse from '../images/smurf-house.jpg';
console.log(smurfHouse);

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Row>
          <Col sm="4">
            <Media left>
              <img src={smurfHouse} alt="smurf house" className="img-fluid" />
            </Media>
          </Col>
          <Col sm="4">
            {' '}
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              );
            })}
          </Col>
          <Col sm="4">
            <Media left>
              <img src={smurfHouse} alt="smurf house" className="img-fluid" />
            </Media>
          </Col>
        </Row>
      </div>
    );
  }
}

Smurfs.propTypes = {
  smurfs: PropTypes.any,
  age: PropTypes.any,
  height: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string
};

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
