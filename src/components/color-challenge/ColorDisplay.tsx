interface ColorDisplayProps {
    correctAnswer: string
}

const ColorDisplay = ({correctAnswer}: ColorDisplayProps) => {
    return (
        <div style={{padding: 8}}>
            <div style={{width: '100%', height: 200, backgroundColor: `#${correctAnswer}`, borderRadius: 8}}/>
        </div>
    )
}

export default ColorDisplay