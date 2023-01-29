import {memo} from 'react'

import { Item } from "../../model/todo-list";
import ItemBox from "./Item";

interface ListItemsProps {
    title: string,
    items: Item[]
}

interface EmptyStateProps {
    id: string,
}

const EmptyState = ({id}: EmptyStateProps) => (
    <p id={id} className="text-primary-400">
        (No items.)
    </p>
);

const ListItems = ({items, title}: ListItemsProps): JSX.Element => {
    const isEmpty = !items.length;
    return (
        <div style={{width: '50%', border: '2px solid purple', borderRadius: 8, padding: 8}}>
            <h3>
                {title}
            </h3>
            <ul style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                {items.map((item: any) => (
                    <ItemBox key={item.id} item={item}/>
                ))}
            </ul>
            {isEmpty && (
                <EmptyState
                    id={`empty-state`}
                />
            )}
        </div>
    )
}

export default memo(ListItems)