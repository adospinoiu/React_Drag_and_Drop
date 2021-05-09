import React, { useState, useRef } from 'react';

function DragNDrop({ data }) {
    const [ list, setList ] = useState(data);
    const dragItem = useRef();

    const handleDragStart = (e, params) => {
        console.log('Drag Started...', params);
        dragItem.current = params;
    }

    return (
        <div className="drag-n-drop">
            {list.map((grp, grpI) => (
                <div key={grp.title} className="dnd-group">
                    <div className="group-title">{grp.title}</div>
                        {grp.items.map((item, itemI) => (
                            <div
                                className="dnd-item"
                                draggable 
                                key={item} 
                                onDragStart={(e) => {handleDragStart(e, {grpI, itemI})}}>
                                    <p>{item}</p>
                            </div>
                        ))}
                </div>
            ))}
        </div>
    )
}

export default DragNDrop
