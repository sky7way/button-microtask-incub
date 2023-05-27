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
    const AddButton = (status: string) => {
        console.log(status)
    }
    const DeleteButton = (status: string) => {
        console.log(status)
    }
    const OnlyClick = (respect:string) => {
        console.log(respect)
    }

    return (
        <div className="App">
            <Button nameButton={'Add Button'} callBack={() => AddButton('Hello, Vasya')}/>
            <Button nameButton={'Delete Button'} callBack={() => DeleteButton('Goodbye, Vasya')}/>
            <Button nameButton={'Yo'} callBack={() => OnlyClick('Yo')} />
        </div>
    );
}

export default App;
