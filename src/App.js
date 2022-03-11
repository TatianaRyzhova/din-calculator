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

  //Y= - 0.848+a*0,474+b*0,366+c*0,742+d*0,279+e*0,057+f*0,127+g*0,148+h*0,349+i*(-0,047) +j*0,014+k*(-0,340) +l*0,607+m*0,046+n*0,023
  const freeCoefficient = -0.848;
  const aa = 0.474 * Number(number.a);
  const bb = 0.366 * Number(number.b);
  const cc = 0.742 * Number(number.c);
  const dd = 0.279 * Number(number.d);
  const ee = 0.057 * Number(number.e);
  const ff = 0.127 * Number(number.f);
  const gg = 0.148 * Number(number.g);
  const hh = 0.349 * Number(number.h);
  const ii = (-0.047) * Number(number.i);
  const jj = 0.014 * Number(number.j);
  const kk = (-0.340) * Number(number.k);
  const ll = 0.607 * Number(number.l);
  const mm = 0.046 * Number(number.m);
  const nn = 0.023 * Number(number.n);

  setResult( freeCoefficient + aa + bb + cc + dd + ee + ff + gg + hh + ii + jj + kk + ll + mm + nn);

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
      <h1>Модель прогнозирования НТД</h1>
      <p>{'Y= -0.848 + a * 0,474 + b * 0,366 + c * 0,742 + d * 0,279 + e * 0,057 + f * 0,127 + g * 0,148 + h * 0,349 + i * (-0,047) + j * 0,014 + k * (-0,340) + l * 0,607 + m * 0,046 + n * 0,023'}</p>
      <p>где:</p>
      <ul>
        <li>𝑌 – наличие НТД</li>
        <li>-0.848– свободный коэффициент</li>
        <li>a, b, с, d, e, f, g, h, i, j, k, l, m, n – сонографические параметры НТД</li>
        <li>наличие признака – 1</li>
        <li>отсутствие признака – 0</li>
      </ul>


      <form onSubmit={handleSubmit}>
        {/* <div className="parameters">
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
        </div> */}
        <div className="tables">
          <div className="table-with-data">
          <h2>Маркеры состояния ТД (2D УЗИ)</h2>
        <table>
          <tr>
            <th style={{width: "20px"}}>a</th>
            <th style={{width: "220px"}}>{'Толщина m.puborectalis < 7мм'}</th>
            <th>
              <input
                type="number"
                name="a"
                onChange={handleChange}
                value={number.a}
                submitted={submitted}
                required
              />
            </th>
          </tr>
          <tr>
            <th>b</th>
            <th>{'Высота сухожильного центра < 10 мм'}</th>
            <th>
              <input
                type="number"
                name="b"
                onChange={handleChange}
                value={number.b}
                submitted={submitted}
                required
              />
            </th>
          </tr>
          <tr>
            <th>c</th>
            <th>{'Толщина пучков m. bulbocavernosus'}</th>
            <th>
              <input
                type="number"
                name="c"
                onChange={handleChange}
                value={number.c}
                submitted={submitted}
                required
              />
            </th>
          </tr>
          <tr>
            <th>d</th>
            <th>{'Диастаз m. bulbocavernosus'}</th>
            <th>
              <input
                type="number"
                name="d"
                onChange={handleChange}
                value={number.d}
                submitted={submitted}
                required
              />
            </th>
          </tr>
        </table>
          </div>

          <div className="table-with-data">
          <h2>Фасциальные дефекты (2D УЗИ)</h2>
        <table>
          <tr>
            <th style={{width: "20px"}}>e</th>
            <th style={{width: "220px"}}>{'Передний компартмент'}</th>
            <th>
              <input
                type="number"
                name="e"
                onChange={handleChange}
                value={number.e}
                submitted={submitted}
                required
              />
            </th>
          </tr>
          <tr>
            <th>f</th>
            <th>{'Задний компартмент'}</th>
            <th>
              <input
                type="number"
                name="f"
                onChange={handleChange}
                value={number.f}
                submitted={submitted}
                required
              />
            </th>
          </tr>
        </table>
          </div>

          <div className="table-with-data">
          <h2>Мышечный дефект (3D УЗИ)</h2>
        <table>
          <tr>
            <th style={{width: "20px"}}>g</th>
            <th style={{width: "220px"}}>{'Парциальный разрыв'}</th>
            <th>
              <input
                type="number"
                name="g"
                onChange={handleChange}
                value={number.g}
                submitted={submitted}
                required
              />
            </th>
          </tr>
          <tr>
            <th>h</th>
            <th>{'Полный односторонний'}</th>
            <th>
              <input
                type="number"
                name="h"
                onChange={handleChange}
                value={number.h}
                submitted={submitted}
                required
              />
            </th>
          </tr>
          <tr>
            <th>i</th>
            <th>{'Полный двусторонний'}</th>
            <th>
              <input
                type="number"
                name="i"
                onChange={handleChange}
                value={number.i}
                submitted={submitted}
                required
              />
            </th>
          </tr>
        </table>
          </div>

          <div className="table-with-data">
          <h2>Расширение хиатуса (3D УЗИ)</h2>
        <table>
          <tr>
            <th style={{width: "20px"}}>j</th>
            <th style={{width: "220px"}}>{'25 - 29,9 см²'}</th>
            <th>
              <input
                type="number"
                name="j"
                onChange={handleChange}
                value={number.j}
                submitted={submitted}
                required
              />
            </th>
          </tr>
          <tr>
            <th>k</th>
            <th>{'30 - 34,9 см²'}</th>
            <th>
              <input
                type="number"
                name="k"
                onChange={handleChange}
                value={number.k}
                submitted={submitted}
                required
              />
            </th>
          </tr>
          <tr>
            <th>l</th>
            <th>{'> 35 см²'}</th>
            <th>
              <input
                type="number"
                name="l"
                onChange={handleChange}
                value={number.l}
                submitted={submitted}
                required
              />
            </th>
          </tr>
          <tr>
            <th>m</th>
            <th>{'> 40 см²'}</th>
            <th>
              <input
                type="number"
                name="m"
                onChange={handleChange}
                value={number.m}
                submitted={submitted}
                required
              />
            </th>
          </tr>
        </table>
          </div>

          <div className="table-with-data">
          <h2>Фасциальные дефекты (3D УЗИ)</h2>
        <table>
          <tr>
            <th style={{width: "20px"}}>n</th>
            <th style={{width: "220px"}}>{'Передний компартмент'}</th>
            <th>
              <input
                type="number"
                name="n"
                onChange={handleChange}
                value={number.n}
                submitted={submitted}
                required
              />
            </th>
          </tr>
         </table> 
          </div>        
        </div>
        
        <button type="submit">РАССЧИТАТЬ</button>
      </form>

      <div className="result">
          Результат:
          <span className={result > 0.259979 ? 'result-red' : 'result-green'}> {result}</span>
          <p className="information">{'Y > 0.259979 – наличие НТД '}</p>
      </div>
    </div>
  );
}

export default App;
