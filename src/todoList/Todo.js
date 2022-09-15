import React, { useState } from "react";

import TodoInput from './TodoList';

const Todo = () => {
  const [items, setItems] = useState([]);
  const addItem = (text) => {
    setItems([...items, {id: Date.now(), text}])
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }
  return (
    <div>
      <TodoInput addItem={addItem} />
      <ul>
        {
          items.map((item) => <li onClick={()=> removeItem(item.id)} key={item.id}>{item.text}</li>)
        }
      </ul>
    </div>
  )
}


export default Todo;