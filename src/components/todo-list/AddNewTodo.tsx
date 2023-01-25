import Grid from "@mui/material/Grid";
import React, {memo} from "react";
import {add} from '../../reducer/reducer'

interface AddNewTodoProps {
    newItemName: string,
    setNewItemName: React.Dispatch<React.SetStateAction<string>>
    addItem?: (name: string) => void;
    dispatch: any
}

const AddNewTodo = ({newItemName, setNewItemName, dispatch}: AddNewTodoProps): JSX.Element => {
    return (
        <Grid style={{border: '2px solid purple', padding: 8, borderRadius: 8}}>
            <form style={{display: 'flex', justifyContent: 'space-between', gap: 8}} onSubmit={(e) => {
                e.preventDefault();
                dispatch(add(newItemName));
                setNewItemName('');
            }}>
                <input value={newItemName} onChange={(event) => setNewItemName(event.target.value)}
                       placeholder={'new todo ...'}
                       maxLength={6}/>
                <button type={'submit'} style={{
                    backgroundColor: 'purple',
                    color: 'white',
                    padding: '8px 24px',
                    borderRadius: 4,
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    Submit
                </button>
            </form>
        </Grid>
    )
}

export default memo(AddNewTodo)