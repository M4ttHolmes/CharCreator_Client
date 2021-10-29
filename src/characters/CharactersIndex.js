import React, { useState, useEffect } from "react";
import DisplayCharacter from "./Character"

const Characters = (props) => {
    const [char, setChar] = useState([]);
    // const [createChar, setCreateChar] = useState(false);

    const getMyCharacters = () => {
        console.log("GetMyCharacters Function Called");
        const accessToken = localStorage.getItem("SessionToken");
        
        fetch(`http://localhost:3000/character/mine`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJtYXR0QGVtYWlsLmNvbSIsImlhdCI6MTYzNTQ1MjkzNCwiZXhwIjoxNjM1NTM5MzM0fQ.Effj0rUc03iEaENkXPR38bPdZ7Qbd-MLGnsgXefa8BE"
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setChar(data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMyCharacters();
    }, [])

    // const buttonHandler = () => {
    //     setCreatePie(true);
    // }

    return(
        <>
        {/* {createPie ? <CreatePie setCreatePie={setCreatePie} sessionToken={props.sessionToken}/> 
        : null}
        {!createPie ? <button onClick={buttonHandler}>Create Pie!</button> : null} */}
            <DisplayCharacter char={char}/>
        </>
    )
}

export default Characters;