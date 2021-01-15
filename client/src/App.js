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

    const [handVisible, setHandVisible] = useState(true);
    const [handClass, setHandClass] = useState("logo_main_no_opacity");
    const [playVisible, setPlayVisible] = useState(true);
    const [playClass, setPlayClass] = useState("logo_main_no_opacity");
    const [userClass, setUserClass] = useState("");
    const [enemyClass, setEnemyClass] = useState("");

    const [timer, setTimer] = useState(-1.0);
    useEffect(() => {
        const countDown = setTimeout(() => {
            checkTimer();
        }, 500);

        return () => clearTimeout(countDown);
    });
    useEffect(() => {
        if (handVisible)
            setHandClass("logo_main_no_opacity");
        else
            setHandClass("logo_main_opacity");
    }, [handVisible]);
    useEffect(() => {
        if (playVisible)
            setPlayClass("logo_main_no_opacity");
        else
            setPlayClass("logo_main_opacity");
    }, [playVisible]);
    useEffect(() => {
        console.log(userClass);
    }, [userClass]);
    useEffect(() => {
        console.log(enemyClass);
    }, [enemyClass]);

    function checkTimer() {
        // update timer then check if it's -1, which is the value to go back
        // will only change page state once
        setTimer(timer - 0.5);
        if (timer === 0.5)
            setPlayVisible(false);
        if (timer <= 0) {
            setPageState(0);
            setPlayVisible(true);
        }
    }

    function selectHandClick(e, id) {
        e.preventDefault();

        let hand = id;
        let enemyHand = generateEnemyHand();
        let winner = compareScores(hand, enemyHand);
        updateScores(winner, hand, enemyHand)
            .then(() => {
                selectHandAniOut(hand, enemyHand, winner);
            });
    }

    function selectHandAniOut(hand, enemyHand, winner) {
        setHandVisible(false);
        setTimeout(() => {
            setHandState(hand);
            setEnemyHandState(enemyHand);
            setPageState(1);
            if (winner === 0 || winner === 1)
                setTimer(1.5); // set the timer time (time - 0.5, to account for initial time delay) (minimum half second)
            else
                setTimer(0.5);
            setHandVisible(true);
        }, 500);
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
    async function updateScores(winner, hand, enemyHand) {
        // increase score for winner
        setTimeout(() => {
            if (winner === 0) {
                setScore(score + 1);
                setUserClass("animate_hand_" + (hand === 0 ? "rock" : hand === 1 ? "paper" : "scissors"));
                setEnemyClass("");
            } else if (winner === 1) {
                setEnemyScore(enemyScore + 1);
                setEnemyClass("animate_hand_" + (enemyHand === 0 ? "rock" : enemyHand === 1 ? "paper" : "scissors") + "_enemy");
                setUserClass("");
            } else {
                setUserClass("");
                setEnemyClass("");
            }
        }, 700);
    }

    return (
        <div className="App">
            <h1 className="love">made with 💖 by Mathew de Vin</h1>
            <Score score={score} enemyScore={enemyScore}/>
            {
                pageState === 0 ?
                    <SelectHand className={handClass} onClick={selectHandClick}/>
                    :
                    pageState === 1 ?
                        <PlayHand className={playClass} userClass={userClass} enemyClass={enemyClass} handId={handState} enemyHandId={enemyHandState}/>
                    :
                        <SelectHand className={handClass} onClick={selectHandClick}/> // fallback
            }
        </div>
    );
}

export default App;
