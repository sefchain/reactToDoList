import { React } from "react";

import Task from "./Task";

function List(props) {
  return (
    <div>
      {props.Task.map((e, i) => (
        <Task
          style={props.MonStyle}
          handleDrag={props.handle}
          key={i}
          children={e}
        />
      ))}
    </div>
  );
}
export default List;

// import { React, useState } from "react";
// import ReactDOM from "react-dom/client";
// import Task from "./Task";
// import Input from "./Input";

// function List() {
//   const [nom, setNom] = useState("");
//   const [task, setTask] = useState([]);
//   const monStyle = {
//     backgroundColor: "red",
//     margin: "5px",
//     maxWidth: "150px",
//   };
//   function submite(e) {
//     e.preventDefault();
//     setTask([...task, nom]);
//     setNom("");
//   }
//   return (
//     <>
//       <Input Nom={nom} Submite={submite} SetNom={setNom} />
//       {/* <form onSubmit={submite}>
//         <input value={nom} onChange={(e) => setNom(e.target.value)} />
//       </form> */}
//       {task.map((e, i) => (
//         <Task style={monStyle} key={i} children={e} />
//       ))}
//     </>
//   );
// }
// export default List;
