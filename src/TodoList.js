import React from "react";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function TodoList({ list, deleteItem, updateItem }) {
  return (
    <div className="list-style">
      <ul>
        {list?.length !== 0
          ? list.map((item) => {
              return (
                <li key={item.id} className="listStye">
                  <div className="title">
                    <span>{item.title}</span>
                  </div>

                  <div className="btn">
                    <AiFillDelete onClick={() => deleteItem(item.id)} />
                    <AiFillEdit onClick={() => updateItem(item.id)} />
                  </div>
                </li>
              );
            })
          : "No item to dispaly"}
      </ul>
    </div>
  );
}

export default TodoList;
