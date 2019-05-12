import React, { Component } from 'react';
import axios from 'axios';

import { Route, NavLink } from 'react-router-dom';

import './App.css';
import { Container, Navbar } from 'reactstrap';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  // CDM
  componentDidMount() {
    console.log(`top of CDM`);
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        this.setState(() => ({ smurfs: res.data }));
      })
      .catch(err => {
        console.log(err);
      });

    console.log(`bottom of CDM`);
  }

  // Current Smurfs
  smurfsOnState() {
    axios
      .get(`http://localhost:3333/smurfs`)
      // .then(res => {
      //   this.setState(() => ({ smurfs: res.data }));
      // trying to stop the constant requests, but it seems that is something
      // more easily done with redux?
      .then(res => {
          this.setState(() => ({ smurfs: res.data }));
              })
      .catch(err => {
        console.log(err);
      });
    return this.state.smurfs;
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Navbar>
            <h2>Let's Get Smurfy</h2>
            <NavLink to="/">Return to List</NavLink>
            <NavLink to="/smurf-form">Add New Smurf</NavLink>
          </Navbar>
          {/* <SmurfForm smurfs={this.smurfsOnState} /> */}
          {/* <Smurfs smurfs={this.state.smurfs} /> */}

          {/* Routes */}
          <Route
            exact
            path="/"
            render={props => (
              <Smurfs
                {...props}
                smurfs={this.smurfsOnState()}
              />
            )}
          />
          <Route
            path="/smurf-form"
            render={props => <SmurfForm {...props} />}
          />
          <Route
            exact
            path='/smurf'
            render={props => (
              <Smurf {...props} />
            )}
           />
        </Container>
      </div>
    );
  }
}

export default App;
