import {useCallback, useMemo, useReducer, useState} from "react";
import {createItem, filterItems, getInitialItems, removeItem, updateItem} from "../feature/todo-list/itemLogic";
import Header from "../components/todo-list/Header";
import AddNewTodo from "../components/todo-list/AddNewTodo";
import ListItems from "../components/todo-list/ListItems";
import { Item } from "../model/todo-list";
import {reducer} from '../reducer/reducer'


const TodoList = (): JSX.Element => {
    const [items, dispatch] = useReducer(reducer,getInitialItems());
    const [newItemName, setNewItemName] = useState('');

    // const add = useCallback((name: string) => {
    //     const item = createItem(name);
    //     setItems([...items, item]);
    // },[items])

    // const update = useCallback((id: string, updates: any) => {
    //     setItems(updateItem(items, id, updates));
    // },[items])

    // const remove = useCallback((id: string) => {
    //     setItems(removeItem(items, id));
    // },[items])

    const unpackedItems = useMemo(()=>filterItems(items, {packed: false}),[items])
    const packedItems = useMemo(()=>filterItems(items, {packed: true}),[items])

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: 900, padding: 16, gap: 10}}>
                <Header items={items}/>
                <AddNewTodo newItemName={newItemName} setNewItemName={setNewItemName} dispatch={dispatch}/>
                <div style={{display: 'flex', gap: 10}}>
                    <ListItems title={'packed Items'} items={packedItems} dispatch={dispatch}/>
                    <ListItems title={'unpacked Items'} items={unpackedItems} dispatch={dispatch}/>
                </div>
            </div>
        </div>
    )
}

export default TodoList