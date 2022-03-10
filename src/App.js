import React, {useEffect, useState} from "react";
import './App.css';

function App() {
const [number, setNumber] = useState({
  a: '',
  b: '',
  c: '',
  d: '', 
  e: '',
  f: '',
  g: '',
  h: '',
  i: '',
  j: '',
  k: '',
  l: '',
  m: '',
  n: ''
});
const [result, setResult] = useState('');
const [submitted, setSubmitted] = useState(false);

function handleChange(event) {
  const input = event.target;
  const value = input.value;
  const name = input.name;
  setNumber({
    ...number,
    [name]: value
  });
}

function handleSubmit(event) {
  event.preventDefault();
  setSubmitted(true);

  // alert(`${number.a} + ${number.b} + ${number.c}`);
  // alert(parseInt(number.a) + parseInt(number.b) + parseInt(number.c))
  const x = 0.3 * Number(number.a)
  const y = 0.75 * Number(number.b)
  const z = 0.46 * Number(number.c)
  setResult( x + y + z);

  setNumber({
    a: '',
    b: '',
    c: '',
    d: '', 
    e: '',
    f: '',
    g: '',
    h: '',
    i: '',
    j: '',
    k: '',
    l: '',
    m: '',
    n: ''
  })
  setSubmitted(false);
}

  return (
    <div className="container">
      <h1>My Calculator</h1>
      {/* <p>The following formula is used for the calculations:</p>
      <p>А = 0,3 * а + 0,75 * b + 0,46 * с</p> */}

      <form onSubmit={handleSubmit}>
        <div className="parameters">
          <div className="parameters-first">
            <label> a: </label>
            <input
              type="number"
              name="a"
              onChange={handleChange}
              value={number.a}
              submitted={submitted}
              required
            />
            <label> b: </label>
            <input
              type="number"
              name="b"
              onChange={handleChange}
              value={number.b}
              submitted={submitted}
              required
            />
            <label> c: </label>
            <input
              type="number"
              name="c"
              onChange={handleChange}
              value={number.c}
              submitted={submitted}
              required
            />

            <label> d: </label>
            <input
              type="number"
              name="d"
              onChange={handleChange}
              value={number.d}
              submitted={submitted}
              required
            />
            <label> e: </label>
            <input
              type="number"
              name="e"
              onChange={handleChange}
              value={number.e}
              submitted={submitted}
              required
            />
            <label> f: </label>
            <input
              type="number"
              name="f"
              onChange={handleChange}
              value={number.f}
              submitted={submitted}
              required
            />
            <label> g: </label>
            <input
              type="number"
              name="g"
              onChange={handleChange}
              value={number.g}
              submitted={submitted}
              required
            />
          </div>

          <div className="parameters-second">
            <label> h: </label>
            <input
              type="number"
              name="h"
              onChange={handleChange}
              value={number.h}
              submitted={submitted}
              required
            />
            <label> i: </label>
            <input
              type="number"
              name="i"
              onChange={handleChange}
              value={number.i}
              submitted={submitted}
              required
            />
            <label> j: </label>
            <input
              type="number"
              name="j"
              onChange={handleChange}
              value={number.j}
              submitted={submitted}
              required
            />

            <label> k: </label>
            <input
              type="number"
              name="k"
              onChange={handleChange}
              value={number.k}
              submitted={submitted}
              required
            />
            <label> l: </label>
            <input
              type="number"
              name="l"
              onChange={handleChange}
              value={number.l}
              submitted={submitted}
              required
            />
            <label> m: </label>
            <input
              type="number"
              name="m"
              onChange={handleChange}
              value={number.m}
              submitted={submitted}
              required
            />
            <label> n: </label>
            <input
              type="number"
              name="n"
              onChange={handleChange}
              value={number.n}
              submitted={submitted}
              required
            />
          </div>
        </div>

        <button type="submit">CALCULATE</button>
      </form>

      <div className="result">
        <p>
          Result:
          <span className={result > 0.259979 ? 'result-red' : 'result-green'}> {result}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
