import React, { useState, useEffect } from "react";
import DisplayCharacter from "./Character"
import UpdateCharacter from "./CharacterEdit"
import APIURL from "../helpers/environment";


const Characters = (props) => {
    const [char, setChar] = useState([]);
    const [updatedCharacter, setUpdatedCharacter] = useState({})
    const [updateActive, setUpdateActive] = useState(false);

    const getMyCharacters = () => {
        console.log("GetMyCharacters Function Called");
        // const accessToken = localStorage.getItem("SessionToken");
        
        fetch(`${APIURL}/character/mine`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken

            })
        })
        .then(response => response.json())
        .then(data => {
            setChar(data.reverse())
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

    return(
        
        <>
            <DisplayCharacter char={char} getMyCharacters={getMyCharacters} editUpdateCharacter={editUpdateCharacter} updateOn={updateOn} sessionToken={props.sessionToken}/>
            {updateActive ? <UpdateCharacter updatedCharacter={updatedCharacter} updateOff={updateOff} sessionToken={props.sessionToken} getMyCharacters={getMyCharacters}/> : <></>}
        </>
    )
 
}


export default Characters;