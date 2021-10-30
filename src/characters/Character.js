import React from "react";


const DisplayCharacter = (props) => {
// Delete Character
    const deleteCharacter = (charId) => {
        console.log("deleteCharacter Function Called");
        console.log(charId);

        const fetch_url = `http://localhost:3000/character/${charId}`;
        //const accessToken = localStorage.getItem("SessionToken");

        fetch(fetch_url, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUsImlhdCI6MTYzNTYwNjIyNSwiZXhwIjoxNjM1NjkyNjI1fQ.uqjlHxOSXeQca_3d2aPdhDBQpmGgGSfREupQHBDd_To"
                // "Authorization": accessToken
              
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                props.getMyCharacters();
            })
            .catch(err => {
                console.error(err);
            })
        }; 


    return(
        <div>
            <h1>My Characters ({props.char.length}):</h1> 
            {props.char.map((char, key) => {
                return(
                    <div className="card" key={key}>
                        <div className="card-body">
                            <h5 className="card-title">{char.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{char.alignment} {char.race} {char.charClass}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Campaign: {char.campaignName}</h6>
                            <p className="card-text">Appearance: {char.appearance}</p>
                            <p className="card-text">Description: {char.description}</p>
                            <p className="card-text">Personality: {char.personality}</p>
                            <p className="card-text">Background: {char.background}</p>
                            <button className="btn btn-dark editBtn" type="button">Edit Character</button>
                            <button className="btn btn-dark deleteBtn" type="button" onClick={() => deleteCharacter(char.id)}>Delete Character</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayCharacter;