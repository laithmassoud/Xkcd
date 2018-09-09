import React, { Component } from 'react';
import logo from './logo.svg';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import Images from './images.js'
import axios from 'axios';
import './App.css';

let random =Math.floor(Math.random() * 10) + 1  

let url = `http://xkcd.com/${random}/info.0.json`

class App extends Component {
  state={
    items:[],
    isLoading: true
  }

  componentDidMount() {
   axios.get(url)
  .then(result => this.setState({ items: result.data, isLoading: false },console.log(result.data.img,'here')))
  }





  render() {
    if(this.state.isLoading) {
      return ( 
      <CircularProgress style={{ color: purple[500]}} thickness={7} />
)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to xkcd</h1>
        </header>
        <Images items={this.state.items}/>
      </div>
    );
  }
}

export default App;
