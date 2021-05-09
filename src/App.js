import React from 'react';
import './App.css';

import DragNDrop from './components/DragNDrop'

const data = [
  {title: 'Group 1', items: ['1', '2', '3']},
  {title: 'Group 2', items: ['4', '5']}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="drag-n-drop">
          {data.map((grp, grpI) => (
            <div key={grp.title} className="dnd-group">
              <div className="group-title">{grp.title}</div>
              {grp.items.map((item, itemI) => (
                <div draggable key={item} className="dnd-item">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

      </header>
    </div>
  );
}

export default App;





          {/* GROUP 1
          <div className="dnd-group">
            <div className="dnd-item">
              <div>
                <p>ITEM 1</p>
              </div>
            </div>

            <div className="dnd-item">
              <div>
                <p>ITEM 2</p>
              </div>
            </div>

            <div className="dnd-item">
              <div>
                <p>ITEM 3</p>
              </div>
            </div>
          </div>

          GROUP 2
          <div className="dnd-group">
            <div className="dnd-item">
              <div>
                <p>ITEM 10</p>
              </div>
            </div>

            <div className="dnd-item">
              <div>
                <p>ITEM 20</p>
              </div>
            </div>

            <div className="dnd-item">
              <div>
                <p>ITEM 30</p>
              </div>
            </div>
          </div>

          GROUP 3
          <div className="dnd-group">

          </div> */}


