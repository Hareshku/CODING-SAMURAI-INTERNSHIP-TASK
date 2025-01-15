import { useState } from "react";
import { MdDelete } from "react-icons/md";

let Todo_Item = ({ TodoName, Tododudate, OnDeleteCkicked }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="row app_items" style={{borderRadius:'15px', backgroundColor:'#e4d0e4', marginTop:'20px', marginBottom:'20px', textAlign:'center', alignItems:'center'}}>
      <div className="col-1">
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => setIsDone(!isDone)}
        />
      </div>
      <div
        className="col-5"
        style={{
          textDecoration: isDone ? "line-through" : "none",
        }}
      >
        {TodoName}
      </div>
      <div className="col-4">{Tododudate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger APP-buttons"
          onClick={() => OnDeleteCkicked(TodoName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Todo_Item;
