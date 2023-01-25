import {useState} from "react";
import {createItem, filterItems, getInitialItems, removeItem, updateItem} from "../feature/todo-list/itemLogic";
import Header from "../components/todo-list/Header";
import AddNewTodo from "../components/todo-list/AddNewTodo";
import ListItems from "../components/todo-list/ListItems";
import { Item } from "../model/todo-list";


const TodoList = (): JSX.Element => {
    const [items, setItems] = useState<Item[]>(getInitialItems());
    const [newItemName, setNewItemName] = useState('');

    const add = (name: string) => {
        const item = createItem(name);
        setItems([...items, item]);
    };

    const update = (id: string, updates: any) => {
        setItems(updateItem(items, id, updates));
    };

    const remove = (id: string) => {
        setItems(removeItem(items, id));
    };

    const unpackedItems = filterItems(items, {packed: false});
    const packedItems = filterItems(items, {packed: true});

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: 900, padding: 16, gap: 10}}>
                <Header items={items}/>
                <AddNewTodo newItemName={newItemName} setNewItemName={setNewItemName} addItem={add}/>
                <div style={{display: 'flex', gap: 10}}>
                    <ListItems title={'packed Items'} items={packedItems} update={update} remove={remove}/>
                    <ListItems title={'unpacked Items'} items={unpackedItems} update={update} remove={remove}/>
                </div>
            </div>
        </div>
    )
}

export default TodoList