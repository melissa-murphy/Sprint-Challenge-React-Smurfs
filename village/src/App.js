import React, { Component } from 'react';
import axios from 'axios';

import { Route, NavLink } from 'react-router-dom';

import './App.css';
import { Container, Navbar } from 'reactstrap';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

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
      .then(res => {
        this.setState(() => ({ smurfs: res.data }));
      })
      .catch(err => {
        console.log(err);
      });
    return this.state.smurfs;
  }

  // Remove Smurfs
  removeSmurfs = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      this.setState(() => ({ smurfs: res.data }))
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Navbar>
            <h2>Let's Get Smurfy</h2>
            <br />
            <NavLink to='/'>Return to List</NavLink>
            <NavLink to='/smurf-form'>Add New Smurf</NavLink>
          </Navbar>
          {/* <SmurfForm smurfs={this.smurfsOnState} /> */}
          {/* <Smurfs smurfs={this.state.smurfs} /> */}

          {/* Routes */}

          <Route
            exact
            path="/"
            render={props => (
              <Smurfs {...props} smurfs={this.smurfsOnState()} />
            )}
          />
          <Route path="/smurf-form" render={props => <SmurfForm {...props} />} />
        </Container>
      </div>
    );
  }
}

export default App;
