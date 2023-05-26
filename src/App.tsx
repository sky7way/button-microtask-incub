import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={ () => {
        console.log('Hello!')}}>Add button</button>
    </div>
  );
}

export default App;
