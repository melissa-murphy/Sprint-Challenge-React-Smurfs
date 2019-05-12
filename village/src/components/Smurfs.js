import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';
import { Row, Col, Media } from 'reactstrap';
import smurfHouse from '../images/smurf-house.jpg';
console.log(smurfHouse);

class Smurfs extends Component {
  // Remove Smurfs
  removeSmurfs = (ev, id) => {
    console.log(ev);
    axios
      .delete(`http://localhost:3333/smurfs/${id}`, { params: { id: smurfs.id } })
      .then(res => {
        this.setState(() => ({ smurfs: res.data }));
      })
      .catch(err => console.log(err));
  };

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
                  removeSmurfs={this.removeSmurfs()}
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

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
