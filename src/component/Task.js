import React from "react";
function Task(props) {
  return (
    <div draggable onDragEnd={(e) => props.handleDrag(e)} style={props.style}>
      {props.children}
    </div>
  );
}
export default Task;
