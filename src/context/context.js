import {createContext, useReducer} from "react";
import {reducer} from "../reducer/reducer";
import {getInitialItems} from "../feature/todo-list/itemLogic";


export const ItemsContext = createContext([])
export const ActionContext = createContext((item)=>{})


const ItemProvider = ({children}) => {
    const [items, dispatch] = useReducer(reducer,getInitialItems());
    return(
        <ItemsContext.Provider value={items}>
            <ActionContext.Provider value={dispatch}>
                {children}
            </ActionContext.Provider>
        </ItemsContext.Provider>
    )
}

export default ItemProvider