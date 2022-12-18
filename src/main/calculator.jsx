import React, { Component } from "react";
import "./calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

const inicialState = {
  displayValie: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = { ...inicialState };
  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({ ...inicialState });
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(number) {
    console.log(number);
  }
  render() {
    return (
      <React.Fragment>
        <div className="calculator">
          <Display value={500}></Display>
          <Button label="AC" click={this.clearMemory} triple="triple"></Button>
          <Button label="/" click={this.setOperation} operation></Button>
          <Button label="7" click={this.addDigit}></Button>
          <Button label="8" click={this.addDigit}></Button>
          <Button label="9" click={this.addDigit}></Button>
          <Button label="*" click={this.setOperation} operation></Button>
          <Button label="4" click={this.addDigit}></Button>
          <Button label="5" click={this.addDigit}></Button>
          <Button label="6" click={this.addDigit}></Button>
          <Button label="-" click={this.setOperation} operation></Button>
          <Button label="1" click={this.addDigit}></Button>
          <Button label="2" click={this.addDigit}></Button>
          <Button label="3" click={this.addDigit}></Button>
          <Button label="+" click={this.setOperation} operation></Button>
          <Button label="0" click={this.addDigit} double="double"></Button>
          <Button label="." click={this.addDigit}></Button>
          <Button label="=" click={this.setOperation} operation></Button>
        </div>
      </React.Fragment>
    );
  }
}
