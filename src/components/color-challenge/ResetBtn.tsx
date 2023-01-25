import React from "react";
import generateColor from "../../feature/color-challenge/generateColor";

interface ResetBtnProps {
    setCorrectAnswer: React.Dispatch<React.SetStateAction<string>>
}

const ResetBtn = ({setCorrectAnswer}: ResetBtnProps): JSX.Element => {

    const handleResetColor = () => {
        setCorrectAnswer(generateColor)
    }

    return (
        <div style={{padding: 8}}>
            <button onClick={handleResetColor} style={{
                backgroundColor: 'palevioletred',
                color: 'white',
                padding: '8px 24px',
                borderRadius: 4,
                fontWeight: 'bold',
                width: '100%',
                cursor: 'pointer'
            }}>
                Reset Color
            </button>
        </div>
    )
}

export default ResetBtn