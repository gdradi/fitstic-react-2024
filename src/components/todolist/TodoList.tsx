import { useState } from "react";
import { ListItemAdder } from "./ListItemAdder";
import TodoListItem from "./TodoListItem";

export function TodoList() {
    const [list, setList] = useState<string[]>([]);

    return <div>
        <h2>TodoList</h2>
        <ListItemAdder onSave={(text) => { setList(list.concat(text)) }} />
        {list.length > 0 && <button onClick={() => setList([])}>Resetta</button>}
        {list.map((listItem, index) => <TodoListItem
            key={index}
            index={index}
            listItem={listItem}
            onDelete={indexToRemove => {
                setList(list.filter((listItem, index) => index !== indexToRemove))
            }} />)}
    </div>
}