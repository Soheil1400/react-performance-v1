import {useState} from "react";

import Expensive from "../components/color-challenge/Expensive";
import InputChallenge from "../components/color-challenge/InputChallenge";
import ResetBtn from "../components/color-challenge/ResetBtn";
import ColorDisplay from "../components/color-challenge/ColorDisplay";

import generateColor from "../feature/color-challenge/generateColor";

const ColorChallenge = (): JSX.Element => {
    const [correctAnswer, setCorrectAnswer] = useState(() => generateColor())
    const [colorGuess, setColorGuess] = useState<string>('')
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: 500, padding: 16}}>
                <ColorDisplay correctAnswer={correctAnswer}/>
                <InputChallenge correctAnswer={correctAnswer} colorGuess={colorGuess} setColorGuess={setColorGuess}/>
                <ResetBtn setCorrectAnswer={setCorrectAnswer}/>
                <Expensive/>
            </div>
        </div>
    )
}

export default ColorChallenge