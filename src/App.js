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
            <label className="tooltip"> a: 
              <span class="tooltiptext">{'Толщина m.puborectalis < 7мм'}</span> 
            </label>
            <input
              type="number"
              name="a"
              onChange={handleChange}
              value={number.a}
              submitted={submitted}
              required
            />
            <label className="tooltip"> b: 
              <span class="tooltiptext">{'Высота сухожильного центра < 10 мм'}</span> 
            </label>
            <input
              type="number"
              name="b"
              onChange={handleChange}
              value={number.b}
              submitted={submitted}
              required
            />
            <label className="tooltip"> c: 
              <span class="tooltiptext">{'Толщина пучков m. bulbocavernosus'}</span>
            </label>
            <input
              type="number"
              name="c"
              onChange={handleChange}
              value={number.c}
              submitted={submitted}
              required
            />

            <label className="tooltip"> d: 
              <span class="tooltiptext">{'Диастаз m. bulbocavernosus'}</span>
            </label>
            <input
              type="number"
              name="d"
              onChange={handleChange}
              value={number.d}
              submitted={submitted}
              required
            />
            <label className="tooltip"> e: 
              <span class="tooltiptext">{'Передний компартмент '}</span>
            </label>
            <input
              type="number"
              name="e"
              onChange={handleChange}
              value={number.e}
              submitted={submitted}
              required
            />
            <label className="tooltip"> f: 
              <span class="tooltiptext">{'Задний компартмент'}</span>
            </label>
            <input
              type="number"
              name="f"
              onChange={handleChange}
              value={number.f}
              submitted={submitted}
              required
            />
            <label className="tooltip"> g: 
              <span class="tooltiptext">{'Парциальный разрыв'}</span>
            </label>
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
            <label className="tooltip"> h: 
              <span class="tooltiptext">{'Полный односторонний'}</span>
            </label>
            <input
              type="number"
              name="h"
              onChange={handleChange}
              value={number.h}
              submitted={submitted}
              required
            />
            <label className="tooltip"> i: 
              <span class="tooltiptext">{'Полный двусторонний'}</span>
            </label>
            <input
              type="number"
              name="i"
              onChange={handleChange}
              value={number.i}
              submitted={submitted}
              required
            />
            <label className="tooltip"> j: 
              <span class="tooltiptext">{'25 - 29,9 см²'}</span>
            </label>
            <input
              type="number"
              name="j"
              onChange={handleChange}
              value={number.j}
              submitted={submitted}
              required
            />

            <label className="tooltip"> k: 
              <span class="tooltiptext">{'30 - 34,9 см²'}</span>
            </label>
            <input
              type="number"
              name="k"
              onChange={handleChange}
              value={number.k}
              submitted={submitted}
              required
            />
            <label className="tooltip"> l: 
              <span class="tooltiptext">{'> 35 см²'}</span>
            </label>
            <input
              type="number"
              name="l"
              onChange={handleChange}
              value={number.l}
              submitted={submitted}
              required
            />
            <label className="tooltip"> m: 
              <span class="tooltiptext">{'> 40 см²'}</span>
            </label>
            <input
              type="number"
              name="m"
              onChange={handleChange}
              value={number.m}
              submitted={submitted}
              required
            />
            <label className="tooltip"> n: 
              <span class="tooltiptext">{'Передний компартмент'}</span>
            </label>
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
