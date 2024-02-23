import React, { Suspense, useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
//import EventDetails from "./components/EventDetails";
const EventDetails = React.lazy(() => import('./components/EventDetails.jsx'));
const Counter = React.lazy(() => import('./components/Counter'));
const Products = React.lazy(() => import('./components/Products.jsx'));
const Events = React.lazy(() => import('./components/Events'));
const Dashboard = React.lazy(() => import('./components/Dashboard.jsx'));
const NotFound = React.lazy(() => import('./components/NotFound.jsx'));

function App() {

  const [show,setShow] = useState(true)

  const [role, setRole] = useState("admin")
  let name = "Test";
  let person = {
    name: "Test",
    age: 30,
  };

  let b = true;

  const style1 = {
    color: 'red',
    backgroundColor: 'blue'
  }

  let students = [
    { name: "s1", age: 10 },
    { name: "s2", age: 20 },
    { name: "s3", age: 30 },
  ];
  
  function test() {
    console.log("I m here")
  }

  function getPerson(person1) {
    return person1;
  }
  return (
    <>
      {/* <Header name={name} age='30' />
      <Counter PropName={name} />
      <button onClick={()=>setShow(!show)}>Update Show</button>
      {show && <Products PropName={name} />} */}
       {/* <h1 > Hello, { name }</h1>
        <h2>Hello ,{getPerson("Test 2")}</h2>
  { b ? <p style={style1}>{person.name}</p> : <p className="age">{person.age}</p> }
  { b && <p>True</p> }
  {
    students.map((s, i) => {
      return (
        <ul key={i}>
          <li>{s.name}</li>
          <li>{s.age}</li>
        </ul>
      )
    })
  }
      <img /> 
      <button onClick={()=>test()} >Click Me</button>  */}

     { /*<Events /> */} 

    <>
    <Header />
      <Suspense fallback={<h1>loading</h1>}>
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Products" element={<Products />} />

          {role === 'admin' && (
            <Route path="/dashboard" element={<Dashboard />} />
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  

     
     
    </>
  );
}

export default App;
