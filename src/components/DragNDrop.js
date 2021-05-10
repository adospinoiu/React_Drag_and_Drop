import React, { useState, useRef } from 'react';

function DragNDrop({ data }) {
    const [ list, setList ] = useState(data);
    const [ dragging, setDragging ] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log('Drag Started...', params);
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setDragging(true);
    }

    const handleDragEnd = () => {
        console.log('Ending drag...')
    }

    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
            return 'current dnd-item'
        }
        return 'dnd-item'
    }

    return (
        <div className="drag-n-drop">
            {list.map((grp, grpI) => (
                <div key={grp.title} className="dnd-group">
                    <div className="group-title">{grp.title}</div>
                        {grp.items.map((item, itemI) => (
                            <div
                                className={dragging?getStyles({grpI, itemI}):"dnd-item"}
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
