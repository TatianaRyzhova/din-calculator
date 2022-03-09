import React, {useEffect, useState} from "react";
import './App.css';

function App() {
const [number, setNumber] = useState({
  a: '',
  b: '',
  c: ''
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
    c: ''
  })
  setSubmitted(false);
}

  return (
    <div className="container">
      <h1>My Calculator</h1>
      <p>The following formula is used for the calculations:</p>
      <p>А = 0,3 * а + 0,75 * b + 0,46 * с</p>

      <form onSubmit={handleSubmit}>
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
        
        <button type="submit">CALCULATE</button>
      </form>

      <div className="result">
        <p>Result: 
          <span> {result}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
