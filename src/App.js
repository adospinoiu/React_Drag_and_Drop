import React from 'react';
import './App.css';

const data = [
  {title: 'group 1', items: ['1', '2', '3']},
  {title: 'group 2', items: ['4', '5']}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="drag-n-drop">

          {/* GROUP 1 */}
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

          {/* GROUP 2 */}
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

          {/* GROUP 3 */}
          <div className="dnd-group">


          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
