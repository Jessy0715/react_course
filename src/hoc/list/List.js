import React from "react";

// 沒有自己的 state 與 methos，因此可以使用 Stateless Functional Component 型態

// NameList.js 與 TodoList.js 在真正專案中可以刪除一個組件，再將另一組件以共用命名方式命名，在這個範例裡，以 List 為命名
const List = ({text, items, onChangeText, onSubmit}) => (
    <ul>
        <form onSubmit={onSubmit}>
            <input value={text} onChange={onChangeText} />
            <button type="submit">Submit</button>
        </form>
        {
            items.map((name) => (<li key={name}>{name}</li>))
        }
    </ul>
)

export default List;