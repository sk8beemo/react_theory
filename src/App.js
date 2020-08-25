import React from 'react';
import './App.css';
import Car from './Car/Car';

function App() {
  const divStyle = {
    textAlign: 'center'
  }
  return (
    <div style={divStyle} className="App">
      <h1>Hello World</h1> 
      <Car name={'Ford'} year={2018}>
        <p>Price</p>
      </Car>
      <Car name={'Audi'} year={2016} />
    </div>
  );
}

export default App;
