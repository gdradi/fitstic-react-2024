import React, { useEffect, useMemo, useState } from 'react';
import styles from './App.module.scss';
import logo from "./assets/logo512.png";
import Display from './components/Display';
import Counter from './components/Counter';
import { TextComponent } from './components/TextComponent';
import CounterWithObjectState from './components/CounterWithObjectState';
import { MyCustomInput } from './components/MyCustomInput';
import { MiddleComponent } from './components/MiddleComponent';
import { Interval } from './components/Interval';
import { TodoList } from './components/todolist/TodoList';
import { Button } from 'antd';
import UserList from './components/client-server/UserList';
import { BrowserRouter, HashRouter, Link, MemoryRouter, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

function calcolo(n: number) {
  console.log("esecuzione di calcolo con n: " + n);
  return n * 2;
}


function Menu() {
  return <div>
    <Link to={`/`}>Vai a home</Link>
    <Link to={`userlist`}>Vai a userlist</Link>
    <Link to={`counter`}>Vai a counter</Link>
  </div>;
}

export default function App() {
  const [text, setText] = useState("");

  const [value, setValue] = useState(10);

  const risultatoCalcolo = useMemo(() => {
    return calcolo(value)
  }, [value]);

  /**
   * Se nello useEffect si passa come lista di dipendenze l'array vuoto [],
   * allora l'effetto viene invocato al mount del componente
   * */
  useEffect(() => {
    console.log("useEffect evento di mount!");
    return () => {
      console.log("useEffect evento di unmount");
    }
  }, []);

  /** non c'è limite al numero di useEffect che si possono definire */
  useEffect(() => {
    console.log("useEffect evento di mount2!");
  }, []);

  console.log("App()");

  return <>
    <div>App</div>
    <MemoryRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<div>Hello world!</div>} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </MemoryRouter>

    {/* <RouterProvider router={router} /> */}


    {/* <TodoList /> */}
    {/* <UserList /> */}


    {/* <CounterWithObjectState /> */}
    {/* <TextComponent /> */}
    {/* <Counter /> */}



    {/* {value !== 20 && <Interval />} */}


    {/* Differenza tra cambio di una prop qualsiasi e cambio della prop key:
        - se cambia una prop qualsiasi, il componente viene RIDISEGNATO
        - se cambia la prop key, il componente viene REINIZIALIZZATO 
          (tutti gli stati tornano al valore iniziale) 
    */ }
    {/* <Counter initialValue={value} /> */}
    {/* <Counter key={value} /> */}


    {/* <button onClick={() => setValue(20)}>imposta a 20</button> */}
    {/* <div>value: {value}</div>
    <div>risultato calcolo(): {risultatoCalcolo}</div> */}

    {/* <MiddleComponent onChange={text => {
      // implementazione della callback
      console.log(text);
      setText(text);
    }} /> */}

    {/* <div>Testo in App.tsx: {text}</div> */}

    {/* <MyCustomInput label={"Cognome"} required={false} /> */}
  </>
};




// export default function App() {
//   return <>
//     {/* <MyComponent /> */}
//     <CyclicRenderingComponent />
//     <div className={styles.title}>
//       {/* <img src={logo} alt="logo" /> */}
//       <div>Fitstic React 2024</div>
//     </div>
//   </>;
// }


const sum = (n1: number, n2: number) => {
  return n1 + n2
}

export function MyComponent() {
  // function sum(n1: number, n2: number) {
  //   return n1 + n2;
  // }

  let num: number = 5;
  let str: string = "ciao!";
  let bool: boolean = true;

  // Rendering condizionale con variabile di appoggio
  let val: JSX.Element | null = null;
  if (bool === true) {
    val = <div>bool è true</div>
  }
  else {
    val = <div>bool è false</div>
  }

  let varAppoggio;
  switch (num) {
    case 1: {
      varAppoggio = <div>num è 1</div>;
      break;
    }
    case 2: {
      varAppoggio = <div>num è 2</div>;
      break;
    }
    default: {
      varAppoggio = <div>altro!</div>;
      break;
    }
  }

  let risultatoSomma = sum(2, 2);

  return <div>
    <h2>myComponent!</h2>
    <div>num: {num}</div>
    <div>str: {str}</div>
    <div>bool: {bool} Attenzione! I booleani non vengono visualizzati</div>
    {val}

    {/* Rendering condizionale con operatore ternario */}
    {bool === true
      ? <div>bool è true</div>
      : <div>bool è false</div>}

    {/* Rendering tramite and logico  */}
    {bool === true && <div>bool è true</div>}

    {/* Null non viene visualizzato */}
    {null}

    {varAppoggio}

    <div>Risultato somma: {risultatoSomma}</div>
    <div>Risultato somma: {sum(3, 4)}</div>

  </div>;
}


export function CyclicRenderingComponent() {
  let array = [2, 4, 6, 7];

  let arrayDiJsx = [];
  for (let i = 0; i < array.length; i++) {
    arrayDiJsx.push(<div key={i}>arrayDiJsx posizione {i}: {array[i]}</div>);
  }

  return <>
    <h4>Rendering ciclico</h4>
    {array.map((item, index) => <div key={index}>Num {index}: {item}</div>)}
    {arrayDiJsx}
  </>
}