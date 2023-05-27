import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    // const addButton = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello!')
    // }
    // const deleteButton = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Chao!')
    // }

    return (
        <div className="App">
            <Button nameButton={'Add Button'} />
            <Button nameButton={'Delete Button'} />
        </div>
    );
}

export default App;
