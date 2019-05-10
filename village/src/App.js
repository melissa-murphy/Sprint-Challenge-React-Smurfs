import React, { Component } from 'react';
import axios from 'axios';

import { Route } from 'react-router-dom';

import './App.css';
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

  render() {
    return (
      <div className="App">
        {/* <SmurfForm smurfs={this.smurfsOnState} /> */}
        {/* <Smurfs smurfs={this.state.smurfs} /> */}

        {/* Routes */}
        <Route exact path="/" component={App} />
        <Route
          exact
          path="/smurfs"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          exact
          path
          to="/add-smurf"
          render={props => <SmurfForm {...props} smurfs={this.smurfsOnState} />}
        />
      </div>
    );
  }
}

export default App;
