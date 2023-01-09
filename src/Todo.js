import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "./TodoList";

function Todo() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [updateTodo, setUpdateTodo] = useState(null);
  const handelChange = (e) => {
    setValue(e.target.value);
  };
  // console.log(updateTodo)
  // add todo list
  const handelClick = () => {
    if (!updateTodo) {
      let newList = { id: Math.floor(Math.random() * 1000), title: value };
      setList([...list, newList]);
    } else {
      let findIndex = list.findIndex((item) => item.id === updateTodo.id);
      list[findIndex].title = value;
      setList(list);
      setUpdateTodo(null);
    }

    setValue("");
    toast.success("list add successfully");
  };
  // delete todo list
  const deleteItem = (id) => {
    let listFind = list.filter((item) => item.id !== id);
    setList(listFind);
    toast.error("list remove successfully");
  };
  // edit todo list
  const updateItem = (id, title) => {
    let findIndex = list.findIndex((item) => item.id === id);
    // console.log(findIndex)
    setUpdateTodo(list[findIndex]);
    setValue(list[findIndex].title);
    toast.warning("Alert you update your list");
  };

  return (
    <div className="container">
      <div className="input-field">
        <h1>Todo List </h1>
        <div className="field">
          <input
            type="search"
            placeholder="Todo..."
            value={value}
            onChange={handelChange}
          />
          {!updateTodo ? (
            <button disabled={!value} onClick={handelClick}>
              Addlist
            </button>
          ) : (
            <button disabled={!value} onClick={handelClick}>
              Update
            </button>
          )}
        </div>
      </div>
      <div className="listStye">
        <TodoList list={list} deleteItem={deleteItem} updateItem={updateItem} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}

export default Todo;
