import './calculator.css';
import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    if (!e.target.name) return;
    const { next, total, operation } = calculate(this.state, e.target.name);

    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  };

  render() {
    const { total, next } = this.state;
    return (
      <section className="App">

        {total ? (
          <div className="result">{total}</div>
        ) : (
          <div className="result">{next}</div>
        )}
        <div className="buttons">
          <button type="button" className="input" onClick={this.handleClick} name="AC">AC</button>
          <button type="button" className="input" onClick={this.handleClick} name="+/-">+/-</button>
          <button type="button" className="input" onClick={this.handleClick} name="%">%</button>
          <button type="button" className="input operator" onClick={this.handleClick} name="÷">÷</button>
          <button type="button" className="input" onClick={this.handleClick} name="7">7</button>
          <button type="button" className="input" onClick={this.handleClick} name="8">8</button>
          <button type="button" className="input" onClick={this.handleClick} name="9">9</button>
          <button type="button" className="input operator" onClick={this.handleClick} name="x">x</button>
          <button type="button" className="input" onClick={this.handleClick} name="4">4</button>
          <button type="button" className="input" onClick={this.handleClick} name="5">5</button>
          <button type="button" className="input" onClick={this.handleClick} name="6">6</button>
          <button type="button" className="input operator" onClick={this.handleClick} name="-">-</button>
          <button type="button" className="input" onClick={this.handleClick} name="1">1</button>
          <button type="button" className="input" onClick={this.handleClick} name="2">2</button>
          <button type="button" className="input" onClick={this.handleClick} name="3">3</button>
          <button type="button" className="input operator" onClick={this.handleClick} name="+">+</button>
          <button type="button" className="input zero" onClick={this.handleClick} name="0">0</button>
          <button type="button" className="input" onClick={this.handleClick} name=".">.</button>
          <button type="button" className="input operator" onClick={this.handleClick} name="=">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
