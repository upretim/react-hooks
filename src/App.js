import React from 'react';
import './App.css';
import Count  from './components/counter';
import ObjState from './components/ObjState'
//https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A
const App=() => {
  return (
    <div className="App">
          Learn React     
          <Count/>  
          <ObjState />
    </div>
  );
}

export default App;
