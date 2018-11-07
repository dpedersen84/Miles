import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    trips: [],
  };

  componentDidMount() {
    this.loadTrips();

  };

  loadTrips = () => {
    let userID = sessionStorage.getItem('userID');

    axios.get(`/api/${userID}/trips`)
      .then(res => {
        this.setState({ trips: res.data })
        console.log(res.data)
      })
  }
  
  render() {
    return (
      <div className="App">
        <h1>MILES</h1>
      </div>
    );
  }
}

export default App;
