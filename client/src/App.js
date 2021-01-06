import React, {useState, useEffect} from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import Button from "./components/Button";
import SelectHand from "./components/SelectHand";
import PlayHand from "./components/PlayHand";

function App() {
    const [merchants, setMerchants] = useState(false);
    useEffect(() => {
        getMerchant();
    }, []);

    function getMerchant() {
        fetch("http://localhost:3001")
            .then(response => {
                return response.text();
            })
            .then(data => {
                setMerchants(data);
            });
    }

    function createMerchant() {
        let name = prompt("Enter merchant name");
        let email = prompt("Enter merchant email");
        fetch("http://localhost:3001/merchants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            });
    }

    function deleteMerchant() {
        let id = prompt("Enter merchant id");
        fetch(`http://localhost:3001/merchants/${id}`, {
            method: "DELETE",
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            })
    }

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

    function selectHandClick(e, id) {
        e.preventDefault();
        setHandState(id);
        setPageState(1);
        setEnemyHandState(generateEnemyHand());
    }

    function generateEnemyHand() {
        // generate hand, either 0, 1, or 2
        return Math.floor(Math.random() * 3);
    }

    return (
        <div className="App">
            {pageState === 0 ?
                <SelectHand onClick={selectHandClick}/>
                :
                pageState === 1 ?
                    <PlayHand handId={handState} enemyHandId={enemyHandState}/>
                    :
                    null
            }
            {/*<div className={"grid"}>*/}
            {/*    /!*<div className={"nav_background"}/>*!/*/}
            {/*    /!*<Navbar>*!/*/}
            {/*    /!*    <NavItem href="#">Login</NavItem>*!/*/}
            {/*    /!*</Navbar>*!/*/}
            {/*    /!*<div>*!/*/}
            {/*    /!*    <Button onClick={""}>Test</Button>*!/*/}
            {/*    /!*    <Button onClick={""} className="bg-green">Good</Button>*!/*/}
            {/*    /!*    <Button onClick={""} className="bg-red">Bad</Button>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div className={"test"}>*!/*/}
            {/*    /!*    {merchants ? merchants : "There is not enough data available"}*!/*/}
            {/*    /!*    <br/>*!/*/}
            {/*    /!*    <button onClick={createMerchant}>Add merchant</button>*!/*/}
            {/*    /!*    <br/>*!/*/}
            {/*    /!*    <button onClick={deleteMerchant}>Delete merchant</button>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
