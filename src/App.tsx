import React, {MouseEvent} from 'react';
import './App.css';

function App() {
    const addButton = (event:MouseEvent<HTMLButtonElement>) => {
        console.log('Hello!')
    }
    const deleteButton = (event:MouseEvent<HTMLButtonElement>) => {
        console.log('Chao!')
    }

    return (
        <div className="App">
            <button onClick={ addButton }>Add button
            </button>
            <button onClick={ deleteButton }>Delete button
            </button>
        </div>
    );
}

export default App;
