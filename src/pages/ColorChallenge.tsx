import {useState} from "react";

import Expensive from "../components/color-challenge/Expensive";

import Game from "../components/color-challenge/Game";

const ColorChallenge = (): JSX.Element => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: 500, padding: 16}}>
                <Game/>
            </div>
        </div>
    )
}

export default ColorChallenge