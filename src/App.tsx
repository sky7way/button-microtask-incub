import React, {MouseEvent} from 'react';
import './App.css';

function App() {
    // const addButton = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello!')
    // }
    // const deleteButton = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Chao!')
    // }

    const onClickHello = (name:string) => {
        console.log(`Hello, ${name}!`);
    }

    const onClickGoodbye = (name:string) => {
        console.log(`Goodbye, ${name}!`);
    }

    const foo1 = () => {
        console.log(100200);
    }

    const foo2 = (number: number) => {
        console.log(number);
    }

    return (
        <div className="App">
            <button onClick={ () => onClickHello('Vasya') }>Add button
            </button>
            <button onClick={ () => onClickGoodbye('Petya') }>Delete button
            </button>
            <button onClick={ foo1 }>+</button>
            <button onClick={ () => foo2(100200) }>-</button>
        </div>
    );
}

export default App;
