import React, {useState, useEffect} from "react";
import "./App.css";

import SelectHand from "./components/SelectHand";
import PlayHand from "./components/PlayHand";
import Score from "./components/Score";

function App() {
    /*
        0 -> Choose Hand
        1 -> Play Hand
     */
    const [pageState, setPageState] = useState(0);
    /*
        0 -> Rock
        1 -> Paper
        2 -> Scissors
     */
    const [handState, setHandState] = useState(0);
    const [enemyHandState, setEnemyHandState] = useState(0);
    const [score, setScore] = useState(0);
    const [enemyScore, setEnemyScore] = useState(0);

    const [timer, setTimer] = useState(-1.0);
    useEffect(() => {
        const countDown = setTimeout(() => {
            checkTimer();
        }, 500);

        return () => clearTimeout(countDown);
    });

    function checkTimer() {
        // update timer then check if it's -1, which is the value to go back
        // will only change page state once
        setTimer(timer - 0.5);
        if (timer <= 0)
            setPageState(0);
        console.log("timer:", timer);
    }

    function selectHandClick(e, id) {
        e.preventDefault();

        let hand = id;
        let enemyHand = generateEnemyHand();
        let winner = compareScores(hand, enemyHand);
        updateScores(winner)
            .then(() => {
                setHandState(hand);
                setEnemyHandState(enemyHand);
                setPageState(1);
                setTimer(1.0); // set the timer time (time - 0.5, to account for initial time delay) (minimum half second)
            });
    }

    function generateEnemyHand() {
        // generate hand, either 0, 1, or 2
        return Math.floor(Math.random() * 3);
    }

    // (state1 - state2 + 5) % 3 === 0 user win
    // (state1 - state2 + 5) % 3 === 1 enemy win
    function compareScores(state1, state2) {
        return (state1 - state2 + 5) % 3;
    }
    async function updateScores(winner) {
        // increase score for winner
        if (winner === 0)
            setScore(score + 1);
        else if (winner === 1)
            setEnemyScore(enemyScore + 1);
    }

    return (
        <div className="App">
            <h1 className="love">made with 💖 by Mathew de Vin</h1>
            <Score score={score} enemyScore={enemyScore}/>
            {
                pageState === 0 ?
                    <SelectHand onClick={selectHandClick}/>
                    :
                    pageState === 1 ?
                        <PlayHand handId={handState} enemyHandId={enemyHandState}/>
                    :
                        <SelectHand onClick={selectHandClick}/> // fallback
            }
        </div>
    );
}

export default App;
