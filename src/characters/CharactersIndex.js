import React, { useState, useEffect } from "react";
import DisplayCharacter from "./Character"
import CreateCharacter from "./CharacterCreate";
import UpdateCharacter from "./CharacterEdit"


const Characters = (props) => {
    const [char, setChar] = useState([]);
    const [updatedCharacter, setUpdatedCharacter] = useState({})
    const [updateActive, setUpdateActive] = useState(false);
    //const [createChar, setCreateChar] = useState(false);

    const getMyCharacters = () => {
        console.log("GetMyCharacters Function Called");
        const accessToken = localStorage.getItem("SessionToken");
        
        fetch(`http://localhost:3000/character/mine`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken

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
    const editUpdateCharacter = (characterId) => {
        setUpdatedCharacter(characterId);
        console.log(characterId)
    }
    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false);
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
            
            <DisplayCharacter char={char} getMyCharacters={getMyCharacters} editUpdateCharacter={editUpdateCharacter} updateOn={updateOn} sessionToken={props.sessionToken}/>
            {updateActive ? <UpdateCharacter updatedCharacter={updatedCharacter} updateOff={updateOff} sessionToken={props.sessionToken} getMyCharacters={getMyCharacters}/> : <></>}
        </>
    )
 
}


export default Characters;