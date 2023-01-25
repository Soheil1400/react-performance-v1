import Grid from "@mui/material/Grid";
import Item from "./Item";

interface ListItemsProps {
    title: string,
    items: any
    update: (id: string, updates: any) => void,
    remove: (id: string) => void
}

interface EmptyStateProps {
    id: string
}

const EmptyState = ({id}: EmptyStateProps) => (
    <p id={id} className="text-primary-400">
        (No items.)
    </p>
);

const ListItems = ({items, title, remove, update}: ListItemsProps): JSX.Element => {
    const isEmpty = !items.length;
    return (
        <div style={{width: '50%', border: '2px solid purple', borderRadius: 8, padding: 8}}>
            <h3>
                {title}
            </h3>
            <ul style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                {items.map((item: any) => (
                    <Item key={item.id} item={item} update={update} remove={remove}/>
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

export default ListItems