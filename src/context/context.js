import {createContext, useReducer} from "react";
import {reducer} from "../reducer/reducer";
import {getInitialItems} from "../feature/todo-list/itemLogic";


export const ItemsContext = createContext({})
export const ActionContext = createContext(()=>{})


const ItemProvider = () => {
    const [items, dispatch] = useReducer(reducer,getInitialItems);
    return(
        <ItemsContext.Provider value={items}>
            <ActionContext.Provider value={dispatch}>

            </ActionContext.Provider>
        </ItemsContext.Provider>
    )
}

export default ItemProvider