import React, { useState, useEffect } from "react";
import DisplayCharacter from "./Character"
import CreateCharacter from "./CharacterCreate";

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
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUsImlhdCI6MTYzNTYwNjIyNSwiZXhwIjoxNjM1NjkyNjI1fQ.uqjlHxOSXeQca_3d2aPdhDBQpmGgGSfREupQHBDd_To"

            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setChar(data)
            console.log(char)
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
            <DisplayCharacter char={char} getMyCharacters={getMyCharacters}/>
        </>
    )
}


export default Characters;