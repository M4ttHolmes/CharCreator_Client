import React, { useState } from "react";
import { Row, Button, Card, CardBody, CardText, CardSubtitle } from 'reactstrap';
import Party from "../assets/party.jpg"

const styles =  {
    headerImg: {
        height: "220px",
        width: "100%",
        objectFit: "cover"
    }
}

const Search = (props) => {
    const [char, setChar] = useState([])
    const [count, setCount] = useState(0);

    // Display All Characters
    function getAllCharacters() {
    console.log("displayAllCharacters Function Called");

        fetch(`http://localhost:3000/character/`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setChar(data)
            setCount(data.length)
        })
        .catch(err => {
            console.error(err);
        })
    }

    // Display By Title
    function getByCampaign() {
        console.log("getByCampaign Function Called");
        let campaignTitle = document.getElementById("searchBar").value;
        console.log(campaignTitle);


        fetch(`http://localhost:3000/character/${campaignTitle}`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            setChar(data)
            setCount(data.length)
        })
        .catch(err => {
            console.error(err);
        })
    }

    return(
        <div className="main">
            <div className="mainDiv">
                <img alt="dragon" style={styles.headerImg} src={Party} />
                <hr />
                <h1>Search Characters ({char.length})</h1>

                <div style={{float: "left"}}>
                    <Button className="btn btn-danger deleteBtn" onClick={getAllCharacters}>View All Characters</Button>
                </div>
                <div style={{float: "right"}}> 
                    <input id="searchBar" type="text" placeholder="Search" style={{width: "250px"}} />
                    <Button className="btn btn-danger deleteBtn" onClick={getByCampaign}>Search by Campaign</Button>
                </div>
                <br />
                <br />
                <Row id="character">
                {char.map((char, key) => {
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
                            </CardBody>
                        </Card>
                    )
                })}
                </Row>
            </div>
        </div>
    )
}

export default Search;