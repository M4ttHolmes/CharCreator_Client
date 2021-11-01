import React from "react";
import Reactstrap, { Button, Row } from "reactstrap";

const Search = (props) => {

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

            let display = document.getElementById("characters");
            for (let i = 0; i = display.childNodes.length; i++) {
                display.removeChild(display.firstChild)
            }

            if (data.length === 0) {
                let display = document.getElementById("characters");
                let header = document.createElement("h5");
                
                display.appendChild(header);
                header.textContent = "No one has made a character yet...";
                header.setAttribute("class", "noChars")
            } else {

                for (let i = 0; i < data.length; i++) {
                    let display = document.getElementById("characters");
                    let card = document.createElement("div");
                    let body = document.createElement("div");
                    let header = document.createElement("h5");
                    let subtitle1 = document.createElement("h6");
                    let subtitle2 = document.createElement("h6");
                    let para1 = document.createElement("p");
                    let para2 = document.createElement("p");
                    let para3 = document.createElement("p");
                    let para4 = document.createElement("p");

                    let current = data[i];
                    let count = data.length;
                    
                    header.textContent = current.name;
                    subtitle1.textContent = `${current.alignment} ${current.race} ${current.charClass}`;
                    subtitle2.textContent = `Campaign: ${current.campaignName}`;
                    para1.textContent = `Appearance: ${current.appearance}`;
                    para2.textContent = `Description: ${current.description}`;
                    para3.textContent = `Personality: ${current.personality}`;
                    para4.textContent = `Background: ${current.background}`;


                    display.appendChild(card);
                    card.appendChild(body);
                    body.appendChild(header);
                    body.appendChild(subtitle1);
                    body.appendChild(subtitle2);
                    body.appendChild(para1);
                    body.appendChild(para2);
                    body.appendChild(para3);
                    body.appendChild(para4);

                    card.setAttribute("id", current.id);
                    card.setAttribute("class", "card");
                    body.setAttribute("class", "card-body");
                    header.setAttribute("class", "card-title");
                    subtitle1.setAttribute("class", "card-subtitle mb-2 text-muted");
                    subtitle2.setAttribute("class", "card-subtitle mb-2 text-muted");
                    para1.setAttribute("class", "card-text");
                    para2.setAttribute("class", "card-text");
                    para3.setAttribute("class", "card-text");
                    para4.setAttribute("class", "card-text");
                }
            }
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

            let display = document.getElementById("characters");
            for (let i = 0; i = display.childNodes.length; i++) {
                display.removeChild(display.firstChild)
            }

            if (data.length === 0) {
                let display = document.getElementById("characters");
                let header = document.createElement("h5");
                
                display.appendChild(header);
                header.textContent = "No one has made a character yet...";
                header.setAttribute("class", "noChars")
            } else {

                for (let i = 0; i < data.length; i++) {
                    let display = document.getElementById("characters");
                    let card = document.createElement("div");
                    let body = document.createElement("div");
                    let header = document.createElement("h5");
                    let subtitle1 = document.createElement("h6");
                    let subtitle2 = document.createElement("h6");
                    let para1 = document.createElement("p");
                    let para2 = document.createElement("p");
                    let para3 = document.createElement("p");
                    let para4 = document.createElement("p");

                    let current = data[i];
                    
                    header.textContent = current.name;
                    subtitle1.textContent = `${current.alignment} ${current.race} ${current.charClass}`;
                    subtitle2.textContent = `Campaign: ${current.campaignName}`;
                    para1.textContent = `Appearance: ${current.appearance}`;
                    para2.textContent = `Description: ${current.description}`;
                    para3.textContent = `Personality: ${current.personality}`;
                    para4.textContent = `Background: ${current.background}`;

                    display.appendChild(card);
                    card.appendChild(body);
                    body.appendChild(header);
                    body.appendChild(subtitle1);
                    body.appendChild(subtitle2);
                    body.appendChild(para1);
                    body.appendChild(para2);
                    body.appendChild(para3);
                    body.appendChild(para4);

                    card.setAttribute("id", current.id);
                    card.setAttribute("class", "card");
                    body.setAttribute("class", "card-body");
                    header.setAttribute("class", "card-title");
                    subtitle1.setAttribute("class", "card-subtitle mb-2 text-muted");
                    subtitle2.setAttribute("class", "card-subtitle mb-2 text-muted");
                    para1.setAttribute("class", "card-text");
                    para2.setAttribute("class", "card-text");
                    para3.setAttribute("class", "card-text");
                    para4.setAttribute("class", "card-text");
                }
            }
        })
        .catch(err => {
            console.error(err);
        })
    }


    return(
        <div className="main">
            <div className="mainDiv">
                <h1>Search Characters</h1>

                <div style={{float: "left"}}>
                    <Button className="btn btn-danger deleteBtn" onClick={getAllCharacters}>View All Characters</Button>
                </div>
                <div style={{float: "right"}}> 
                    <input id="searchBar" type="text" placeholder="Search" style={{width: "250px"}} />
                    <Button className="btn btn-danger deleteBtn" onClick={getByCampaign}>Search by Campaign</Button>
                </div>
                <br />
                <br />
                <hr />
                <Row id="characters">

                </Row>
            </div>
        </div>
    )
}

export default Search;