import { React } from "react";
function Input(props) {
  return (
    <form onSubmit={props.Submite}>
      <input
        style={{ width: "200px", margin: "10px" }}
        value={props.Nom}
        onChange={(e) => props.SetNom(e.target.value)}
        placeholder="Entrer un task"
      />
    </form>
  );
}
export default Input;
