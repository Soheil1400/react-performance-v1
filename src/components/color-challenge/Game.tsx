import {useState} from 'react'

import ColorDisplay from "./ColorDisplay"
import InputChallenge from "./InputChallenge"
import ResetBtn from "./ResetBtn"

import generateColor from "../../feature/color-challenge/generateColor";

const Game = () => {
    const [correctAnswer, setCorrectAnswer] = useState(() => generateColor())
    const [colorGuess, setColorGuess] = useState<string>('')
    return(
        <>
            <ColorDisplay correctAnswer={correctAnswer}/>
            <InputChallenge correctAnswer={correctAnswer} colorGuess={colorGuess} setColorGuess={setColorGuess}/>
            <ResetBtn setCorrectAnswer={setCorrectAnswer}/>
        </>
    )
}

export default Game