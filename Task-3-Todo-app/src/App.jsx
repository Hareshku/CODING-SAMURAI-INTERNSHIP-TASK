import App_name from "./components/App-name";
import Todo_input from "./components/Todo_input";
import Todo_Items from "./components/Todo-Items";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./components/App.module.css";
import WelComMsg from "./components/WellComMsg";
import { useState } from "react";

function App() {
  const [TodoItems, setTodoItems] = useState([
    {
      Name: "Buy Milk",
      dudate: "3/4/2024",
    },
    {
      Name: "Learn React",
      dudate: "28/5/2024",
    },
  ]);

  const OnNewItemAdd = (ItemName, duDate) => {
    const NewTodoItems = [
      ...TodoItems,
      {
        Name: ItemName,
        dudate: duDate,
      },
    ];
    setTodoItems(NewTodoItems);
  };

  const OnDeleteCkicked = (todoItemName) => {
    const NewItems = TodoItems.filter((item) => item.Name !== todoItemName);
    setTodoItems(NewItems);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card main-card">
            <div className="card-body">
              <App_name />
              <Todo_input HandleOnAdd={OnNewItemAdd} />
              {TodoItems.length === 0 && <WelComMsg />}
              <Todo_Items Add_items={TodoItems} OnDeleteCkicked={OnDeleteCkicked} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;