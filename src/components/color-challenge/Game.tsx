import {useState, ReactNode} from 'react'

import ColorDisplay from "./ColorDisplay"
import InputChallenge from "./InputChallenge"
import ResetBtn from "./ResetBtn"

import generateColor from "../../feature/color-challenge/generateColor";
import Expensive from './Expensive';

const Game = () => {
    const [correctAnswer, setCorrectAnswer] = useState(() => generateColor())
    const [colorGuess, setColorGuess] = useState<string>('')
    return(
        <>
            <ColorDisplay correctAnswer={correctAnswer}/>
            <InputChallenge correctAnswer={correctAnswer} colorGuess={colorGuess} setColorGuess={setColorGuess}/>
            <Expensive/>
            <ResetBtn setCorrectAnswer={setCorrectAnswer}/>
        </>
    )
}

export default Game