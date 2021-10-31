import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input} from "reactstrap";

const CreateCharacter = (props) => {
    const [name, setName] = useState("");
    const [appearance, setAppearance] = useState("");
    const [personality, setPersonality] = useState("");
    const [description, setDescription] = useState("");
    const [background, setBackground] = useState("");
    const [race, setRace] = useState("");
    const [charClass, setCharClass] = useState("");
    const [alignment, setAlignment] = useState("");
    const [campaignName, setCampaignName] = useState("");
    const [randomName, setRandomName] = useState("");

    const createCharacter = (e) => {
        e.preventDefault();
        let url = "http://localhost:3000/character/create"

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                character: {
                    name: name,
                    appearance: appearance,
                    personality: personality,
                    description: description,
                    background: background,
                    race: race,
                    charClass: charClass,
                    alignment: alignment,
                    campaignName: campaignName,
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken

            })
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setName("");
            setPersonality("");
            setAppearance("");
            setDescription("");
            setBackground("");
            setRace("");
            setCharClass("");
            setAlignment("");
            setCampaignName("");
            // props.fetchWorkouts();
            // props.setCreatePie(false);

            let feedback = document.getElementById("feedback")
            let message = document.createElement("h3")

            feedback.appendChild(message)
            message.textContent = "Character Created"

        })
        .catch(err => console.log(err))
    }
        const nameRandomizer = () => {
            let url = "https://api.namefake.com/english-united-states/random/"
            fetch(url, {
                method: "GET",
                mode: "no-cors",
                headers: {
                "Content-Type": "application/json",
            }
        })
    
            .then(res => res.json())
            .then(json => {
                console.log(json)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Create Character</h1>
                <Form className="createForm" onSubmit={createCharacter}>
                    <Input required onChange={(e) => setName(e.target.value)} value={name} placeholder="*Name" />
                    <button type="button" onClick={() => nameRandomizer()}>Randomize Your Name</button>
                    <Input type="select" onChange={(e) => setAlignment(e.target.value)} value={alignment} placeholder="Alignment">
                        <option hidden>--Choose an Alignment--</option>
                        <option value="Lawful Good">Lawful Good</option>
                        <option value="Neutral Good">Neutral Good</option>
                        <option value="Chaotic Good">Chaotic Good</option>
                        <option disabled>──────────</option>
                        <option value="Lawful Neutral">Lawful Neutral</option>
                        <option value="True Neutral">True Neutral</option>
                        <option value="Chaotic Neutral">Chaotic Neutral</option>
                        <option disabled>──────────</option>
                        <option value="Lawful Evil">Lawful Evil</option>
                        <option value="Neutral Evil">Neutral Evil</option>
                        <option value="Chaotic Evil">Chaotic Evil</option>
                    </Input>
                    <Input type='select' onChange={(e) => setRace(e.target.value)} value= {race} placeholder="Race">
                        <option hidden>--Choose a Race--</option>
                        <option value="Dwarf">Dwarf</option>
                        <option value="Elf">Elf</option>
                        <option value="Halfling">Halfling</option>
                        <option value="Human">Human</option>
                        <option value="Dragonborn">Dragonborn</option>
                        <option value="Gnome">Gnome</option>
                        <option value="Half-Elf">Half-Elf</option>
                        <option value="Half-Orc">Half-Orc</option>
                        <option value="Tiefling">Tiefling</option>
                    </Input>
                    <Input type='select' onChange={(e) => setCharClass(e.target.value)} value={charClass} placeholder="Character Class">
                        <option hidden>--Choose a Class--</option>
                        <option value="Artificer">Artificer</option>
                        <option value="Barbarian">Barbarian</option>
                        <option value="Bard">Bard</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Druid">Druid</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Monk">Monk</option>
                        <option value="Paladin">Paladin</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Rogue">Rogue</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Wizard">Wizard</option>
                    </Input>
                    <Input type='textarea' onChange={(e) => setAppearance(e.target.value)} value={appearance} placeholder="Appearance" />
                    <Input type='textarea' onChange={(e) => setPersonality(e.target.value)} value={personality} placeholder="Personality" />
                    <Input type='textarea' onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Description" />
                    <Input type='textarea' onChange={(e) => setBackground(e.target.value)} value={background} placeholder="Background" />
                    <Input onChange={(e) => setCampaignName(e.target.value)} value={campaignName} placeholder="Campaign Name" />
                    <br />
                    <Button class="editBtn" type='submit'>Create!</Button>
                </Form>
                <div id="feedback">

                </div>
            </div>
        </div>
    )
}

export default CreateCharacter;