import { React, useState } from "react";
import "./App.css";
import Input from "./component/Input";
import List from "./component/List";

function App() {
  const [nom, setNom] = useState("");
  const [tasktodo, setTasktodo] = useState([]);
  const [taskprogress, setTaskprogress] = useState([]);
  const [taskdone, setTaskdone] = useState([]);
  const todoStyle = {
    backgroundColor: "#ffffff",
    margin: "10px",
    textAlign: "center",
    height: "25px",
    border: "Solid 1px black",
    borderRadius: "5px",
    color: "grey",
    paddingTop: "5px",
  };
  const progressStyle = {
    backgroundColor: "#ffffff",
    margin: "10px",
    textAlign: "center",
    height: "25px",
    border: "Solid 1px black",
    borderRadius: "5px",
    color: "grey",
    paddingTop: "5px",
  };
  const doneStyle = {
    backgroundColor: "#cecece",
    margin: "10px",
    textAlign: "center",
    height: "25px",
    border: "Solid 1px black",
    borderRadius: "5px",
    color: "grey",
    paddingTop: "5px",
  };
  function submite(e) {
    e.preventDefault();
    setTasktodo([...tasktodo, nom]);
    setNom("");
  }
  function handleDragtodo(e) {
    setTaskprogress([...taskprogress, e.target.innerText]);
    setTasktodo([...tasktodo.filter((j) => j !== e.target.innerText)]);
  }
  function handleDragprogress(e) {
    setTaskdone([...taskdone, e.target.innerText]);
    setTaskprogress([...taskprogress.filter((j) => j !== e.target.innerText)]);
  }
  return (
    <div className="main">
      <div className="back">
        <button
          onClick={() => {
            setTasktodo([]);
            setTaskdone([]);
            setTaskprogress([]);
          }}
        >
          New Task
        </button>
      </div>

      <div className="container">
        <div className="container-todo">
          <h1>To Do</h1>
          <Input Nom={nom} Submite={submite} SetNom={setNom} />
          <List Task={tasktodo} MonStyle={todoStyle} handle={handleDragtodo} />
        </div>
        <div className="container-progress">
          <h1>In Progress</h1>
          <List
            Task={taskprogress}
            MonStyle={progressStyle}
            handle={handleDragprogress}
          />
        </div>
        <div className="container-done">
          <h1>Done</h1>
          <List Task={taskdone} MonStyle={doneStyle} />
        </div>
      </div>
    </div>
  );
}

export default App;
