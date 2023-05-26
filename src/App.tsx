import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <button onClick={(event) => {
                console.log('Hello!')
            }}>Add button
            </button>
            <button onClick={(event) => {
                console.log('Chao!')
            }}>Delete button
            </button>
        </div>
    );
}

export default App;
