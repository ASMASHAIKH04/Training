// import logo from './logo.svg';
// import './App.css';
import "./style.css";
function App() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="./style.css" />
      <title>Todo List </title>
      <header>
        <h1>List for the DAY</h1>
      </header>
      <form>
        <input type="text" className="todo-input" maxLength={40} placeholder="task here" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square" />
        </button>
      </form>
      <div className="todo-container">
        <ul className="todo-list" />
      </div>
    </div>
  );
}

export default App;
