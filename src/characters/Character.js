import React from "react";
import { Row, Button, Card, CardBody, CardText, CardSubtitle } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DisplayCharacter = (props) => {
    const notify = () => toast("🐉  Character Deleted")

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

        const charCount = () => {
            if (props.char.length == 0) {
                return
            } else {
                return `(${props.char.length})`
            }
        }


    return(
        <Row>
            <h1>My Characters {charCount()}:</h1> 
            <p>Use this page to manage your existing characters.</p>
            {props.char.map((char, key) => {
                return(
                    <Card key={key}>
                        <CardBody>
                            <h5 className="card-title">{char.name}</h5>
                            <CardSubtitle className="mb-2 text-muted">{char.alignment} / {char.race} / {char.charClass}</CardSubtitle>
                            <CardSubtitle className="mb-2 text-muted">Campaign: {char.campaignName}</CardSubtitle>
                            <CardText><strong>Appearance:</strong> {char.appearance}</CardText>
                            <CardText><strong>Description:</strong> {char.description}</CardText>
                            <CardText><strong>Personality:</strong> {char.personality}</CardText>
                            <CardText><strong>Background:</strong> {char.background}</CardText>
                            <Button className="btn btn-warning editBtn" type="button" onClick={() => {props.editUpdateCharacter(char); props.updateOn()}}>Edit Character</Button>
                            <Button className="btn btn-danger deleteBtn" type="button" onClick={() => {deleteCharacter(char.id); notify()}}>Delete Character</Button>
                        </CardBody>
                    </Card>
                )
            })}
            <ToastContainer closeButton={false} position="bottom-right" progressClassName="toastProgress"/>
        </Row>
    )
}

export default DisplayCharacter;