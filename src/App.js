import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {target: 0,
                  num1: 0,
                  num2: 0,
                  num3: 0,
                  num4: 0,
                  num5: 0,
                  num6: 0,
                  bignums: [25,50,75,100]
                }
    this.oneBig = this.oneBig.bind(this);
    this.twoBig = this.twoBig.bind(this);
    this.threeBig = this.threeBig.bind(this);
    this.target = this.target.bind(this);
  }

  target(){
    this.setState({
      target: Math.floor(Math.random() * (999 - 100 + 1)) + 100
    })
  }

  oneBig(){
    this.setState({
                  num1: this.state.bignums[Math.floor(Math.random() * 4)],
                  num2: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num3: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num4: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num5: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num6: Math.floor(Math.random() * (10 - 1 + 1)) + 1
                })

  }
  twoBig(){
    this.setState({
                  num1: this.state.bignums[Math.floor(Math.random() * 4)],
                  num2: this.state.bignums[Math.floor(Math.random() * 4)],
                  num3: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num4: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num5: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num6: Math.floor(Math.random() * (10 - 1 + 1)) + 1
                })

  }
  threeBig(){
    this.setState({
                  num1: this.state.bignums[Math.floor(Math.random() * 4)],
                  num2: this.state.bignums[Math.floor(Math.random() * 4)],
                  num3: this.state.bignums[Math.floor(Math.random() * 4)],
                  num4: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num5: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                  num6: Math.floor(Math.random() * (10 - 1 + 1)) + 1
                })

  }

  render(){
    return(
      <div>
        <h2>Your numbers:</h2>
        <h2 style={{display: "inline"}}>|{this.state.num1}|</h2>
        <h2 style={{display: "inline"}}>{this.state.num2}|</h2>
        <h2 style={{display: "inline"}}>{this.state.num3}|</h2>
        <h2 style={{display: "inline"}}>{this.state.num4}|</h2>
        <h2 style={{display: "inline"}}>{this.state.num5}|</h2>
        <h2 style={{display: "inline"}}>{this.state.num6}|</h2>
        <h2>Your Target: {this.state.target}</h2>
        <div>
          <button onClick={this.oneBig} style={{marginRight: 10}}>
            1 big, 5 small
          </button>
          <button onClick={this.twoBig} style={{marginRight: 10}}>
            2 big, 4 small
          </button>
          <button onClick={this.threeBig} style={{marginRight: 10}}>
            3 big, 3 small
          </button>
        </div>
        <h2></h2>
        <button onClick={this.target}>
          Generate Target
        </button>

      </div>
    )
  }

}

export default App;
