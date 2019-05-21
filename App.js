import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ResultComponent from './result-component.js';
import InputComponent from './input-component.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ''
    }
  }

  onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.clear()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


  calculate = () => {
      try {
          this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
        }
    catch (e) {
            this.setState({
                result: "Error"
            })

        }
  };

  reset = () => {
    this.setState({
      result: ''
    })
  };

  clear = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <div className="calc-body">
          <div className="header">
            <h2>Simple Calculator</h2>
          </div>
          <br></br>
          <ResultComponent result={this.state.result}/>
          <InputComponent onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
