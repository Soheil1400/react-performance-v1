import {useState} from "react";

interface ItemProps {
    item: any,
    update: (id: string, updates: any) => void,
    remove: (id: string) => void
}

const Item = ({item, update, remove}: ItemProps) => {
    const [editing, setEditing] = useState(false);

    return (
        <li style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <input
                style={{width: '5%', cursor: 'pointer'}}
                type="checkbox"
                className="focus:bg-red-500"
                checked={item.packed}
                id={`toggle-${item.id}`}
                onChange={() => update(item.id, {packed: !item.packed})}
            />
            <label
                style={{width: '25%', fontSize: 12, cursor: 'pointer'}}
                htmlFor={`toggle-${item.id}`}
            >
                {item.name}
            </label>
            <input
                style={{width: '30%'}}
                disabled={!editing}
                value={item.name}
                id={`edit-${item.id}`}
                onChange={(event) => update(item.id, {name: event.target.value})}
            />
            <div style={{display: 'flex', gap: 2, width: '30%'}}>
                <button
                    style={{backgroundColor: 'lightgray', borderRadius: 8, padding: '4px 8px', cursor: 'pointer'}}
                    aria-label={`Edit "${item.name}"`}
                    onClick={() => setEditing(!editing)}
                >
                    {editing ? '💾 Save' : '✍️ Edit'}
                </button>
                <button
                    style={{backgroundColor: 'lightgray', borderRadius: 8, padding: '4px 8px', cursor: 'pointer'}}
                    aria-label={`Remove "${item.name}"`}
                    onClick={() => remove(item.id)}
                >
                    🗑 Remove
                </button>
            </div>
        </li>
    )
}

export default Item