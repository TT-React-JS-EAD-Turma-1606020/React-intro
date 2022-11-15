import { useState } from 'react';
import './App.css';
import { Course } from './components/Course';

const name = 'Eliezer'

const like = true

const courses = ['React JS', "JavaScript", 'CSS', 'JS e CSS Pro']

function App() {
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    alert('Botão clicado')
  }

  return (
    <>
      <h2>Eventos:</h2>
      <button onClick={handleClickButton}>Click-me</button>

      <hr />

      <h2>useState:</h2>
      <div>
        <strong>
          {count}
        </strong>

        <br />

        <button onClick={() => setCount(count - 1)}>Remover</button>
        <button onClick={() => setCount(count + 1)}>Adicionar</button>
      </div>

      <hr />

      <h2>Expressões:</h2>

      <p>Olá {name}!</p>

      <hr />

      <h2>Condicionais:</h2>

      <p>O {name} está {like ? 'gostando' : 'não gostando'} do curso!</p>

      {like && `Que bom que ${name} está gostando!`}

      <hr />

      <h2>Atributos:</h2>

      <div className='atributo-css'>
        Curso de React
      </div>

      <hr />

      <h2>Listas:</h2>

      <div>
        <ul>
          {/* [<li>React JS</li>, <li>JavaScript</li>, ...] */}
          {courses.map((course, index) => {
            return (
              <li key={index}>
                <Course text={course} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
