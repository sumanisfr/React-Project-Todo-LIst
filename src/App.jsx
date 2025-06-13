import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import Todoitem1 from "./Components/Todoitem1";
import Todoitem2 from "./Components/Todoitem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <div className="items-container">
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </center>
  );
}
export default App;
