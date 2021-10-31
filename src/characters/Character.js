import React from "react";
import { Row } from "reactstrap";

const DisplayCharacter = (props) => {
// Edit Character
    const editCharacter = (charId) => {
        

    }

// Delete Character
    const deleteCharacter = (charId) => {
        console.log("deleteCharacter Function Called");
        console.log(charId);

        const fetch_url = `http://localhost:3000/character/${charId}`;

        fetch(fetch_url, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
              
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
        <Row>
            <h1>My Characters ({props.char.length}):</h1> 
            {props.char.map((char, key) => {
                return(
                    <div className="card" key={key}>
                        <div className="card-body">
                            <h5 className="card-title">{char.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{char.alignment} / {char.race} / {char.charClass}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Campaign: {char.campaignName}</h6>
                            <p className="card-text"><strong>Appearance:</strong> {char.appearance}</p>
                            <p className="card-text"><strong>Description:</strong> {char.description}</p>
                            <p className="card-text"><strong>Personality:</strong> {char.personality}</p>
                            <p className="card-text"><strong>Background:</strong> {char.background}</p>
                            <button className="btn btn-warning editBtn" type="button">Edit Character</button>
                            <button className="btn btn-danger deleteBtn" type="button" onClick={() => deleteCharacter(char.id)}>Delete Character</button>
                        </div>
                    </div>
                )
            })}
        </Row>
    )
}

export default DisplayCharacter;