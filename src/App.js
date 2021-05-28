import React, { useState } from 'react';

// ###### Drag-N-Drop CODE ######
// import './App.css';
// import DragNDrop from './components/DragNDrop'
// const data = [
//   {title: 'Group 1', items: ['1', '2', '3']},
//   {title: 'Group 2', items: ['4', '5']}
// ]
// ###############################

// ###### Moving Data from Child to Parent ######
import './Parent.css'; 
import Child from './Child.js'

function App() {
const [ word, setWord ] = useState('Parent');

  return (
    // ###### Drag-N-Drop CODE ######
    // <div className="App">
    //   <header className="App-header">
    //     <DragNDrop data={data}/>
    //   </header>
    // </div>
    // ##############################

    <div className="parent">
        <h1>{word}</h1>

        <Child 
          changeWord={word => setWord(word)}/>
    </div>
  )
}

export default App;






