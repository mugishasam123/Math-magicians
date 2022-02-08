import './calculator.css';
import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <section className="App">
        <div className="result">0</div>
        <div className="buttons">
          <button type="button" className="input">AC</button>
          <button type="button" className="input">+/-</button>
          <button type="button" className="input">%</button>
          <button type="button" className="input operator">÷</button>
          <button type="button" className="input">7</button>
          <button type="button" className="input">8</button>
          <button type="button" className="input">9</button>
          <button type="button" className="input operator">X</button>
          <button type="button" className="input">4</button>
          <button type="button" className="input">5</button>
          <button type="button" className="input">6</button>
          <button type="button" className="input operator">-</button>
          <button type="button" className="input">1</button>
          <button type="button" className="input">2</button>
          <button type="button" className="input">3</button>
          <button type="button" className="input operator">+</button>
          <button type="button" className="input zero">0</button>
          <button type="button" className="input">.</button>
          <button type="button" className="input operator">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
