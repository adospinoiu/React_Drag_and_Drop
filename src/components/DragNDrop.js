import React from 'react';

function DragNDrop() {
    return (
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
    )
}

export default DragNDrop
