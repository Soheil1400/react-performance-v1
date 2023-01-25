interface HeaderProps {
    items: any
}

const Header = ({items}: HeaderProps): JSX.Element => {
    return (
        <div style={{border: '2px solid purple', padding: 8, borderRadius: 8}}>
            We have {items.length} items
        </div>
    )
}

export default Header