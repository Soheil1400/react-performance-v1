import React, {FormEvent} from "react";

interface InputChallengeProps {
    colorGuess: string,
    setColorGuess: React.Dispatch<React.SetStateAction<string>>,
    correctAnswer: string
}

const InputChallenge = ({colorGuess, setColorGuess, correctAnswer}: InputChallengeProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColorGuess(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (colorGuess === correctAnswer) {
            alert('good job')
        } else {
            alert('XD nice try')
        }
    }

    return (
        <div style={{padding: 8}}>
            <form style={{display: 'flex', justifyContent: 'space-between', gap: 8}} onSubmit={handleSubmit}>
                <input value={colorGuess} onChange={handleChange} placeholder={'type color HEX code ...'}
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
        </div>
    )
}

export default InputChallenge