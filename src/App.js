import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  
   return (
   <div className="name">
     My name is <strong>{props.name} and age is {props.age - 5}</strong>
     <br/><br/>
     My Shopping list for today
     <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
   </div>
   );

}

export default App;
