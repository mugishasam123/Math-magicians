import './calculator.css';
import React, { useState } from 'react';

import calculate from '../logic/calculate';
import NavBar from './NavBar';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    if (!e.target.name) return;
    const { next, total, operation } = calculate(state, e.target.name);

    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };

  const { total, next } = state;
  return (
    <>
      <div className="app">
        <NavBar />
        <h2 className="second-heading"> Lets do some math </h2>
        {' '}
        <section className="App">
          {' '}
          {total ? (
            <div className="result">
              {' '}
              {total}
              {' '}
            </div>
          ) : (
            <div className="result">
              {' '}
              {next}
              {' '}
            </div>
          )}
          {' '}
          <div className="buttons">
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="AC"
            >
              {' '}
              AC
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="+/-"
            >
              {' '}
              + /-
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="%"
            >
              {' '}
              %
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input operator"
              onClick={handleClick}
              name="÷"
            >
              {' '}
              ÷
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="7"
            >
              {' '}
              7
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="8"
            >
              {' '}
              8
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="9"
            >
              {' '}
              9
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input operator"
              onClick={handleClick}
              name="x"
            >
              {' '}
              x
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="4"
            >
              {' '}
              4
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="5"
            >
              {' '}
              5
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="6"
            >
              {' '}
              6
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input operator"
              onClick={handleClick}
              name="-"
            >
              {' '}
              -
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="1"
            >
              {' '}
              1
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="2"
            >
              {' '}
              2
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="3"
            >
              {' '}
              3
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input operator"
              onClick={handleClick}
              name="+"
            >
              {' '}
              +
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input zero"
              onClick={handleClick}
              name="0"
            >
              {' '}
              0
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input"
              onClick={handleClick}
              name="."
            >
              {' '}
              .
              {' '}
            </button>
            {' '}
            <button
              type="button"
              className="input operator"
              onClick={handleClick}
              name="="
            >
              {' '}
              =
              {' '}
            </button>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
      </div>
      {' '}
    </>
  );
};

export default Calculator;
