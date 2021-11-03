import React, {useEffect, useState} from "react";
import {Button, Form, FormGroup, Label, Input} from "reactstrap";
import MagicBanner from "../assets/magic.jpg"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Radium from 'radium'
import APIURL from "../helpers/environment";


const styles =  {
    headerImg: {
        height: "220px",
        width: "100%",
        objectFit: "cover"
    },
    inputBox: {
        width: "30em",
        marginRight: "2em",
        height: "2.2em"
        
    },
    formFlex: {
        display: "flex"
    },
    toCenter: {
        marginLeft: "11.6em"
    },
    inputTextArea: {
        width: "30em",
        height: "5em",
        marginRight: "2em"
    }
}


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
    const [loginUsername, setLoginUsername] = useState();
    
    const notify = () => {
        if (name !== "") { 
            toast("🦄 Character Created")
        } else {
            console.log("Name Required.");
        }
    }

    const createCharacter = (e) => {
        e.preventDefault();
        let url = `${APIURL}/character/create`
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

            // let feedback = document.getElementById("feedback")
            // let message = document.createElement("h3")

            // feedback.appendChild(message)
            // message.textContent = "Character Created"
            
        })
        .catch(err => console.log(err))
        
    }
    const NameRandomizer = () => {

            // useEffect(() => {
            let url = "https://randomuser.me/api/?inc=login"
            fetch(url, {
            //     method: "GET",
            //     headers: {
            //         "Content-Type": "application/json"
                    
            // }
            
        })
            .then(res => res.json())
            
            .then(data => {
                const login = data.results[0].login.username
                console.log(data.results[0].login.username)
                setName(login)
                const nameField = document.getElementById("nameField")
                nameField.value = login

                console.log(login.username)


            })
            .catch(err => console.log(err))
    //   }, [])
}

   

    return (
        <div className="main">
            <div className="mainDiv">
            <img alt="dragon" style={styles.headerImg} src={MagicBanner} />
            <hr />
                <h1>Create Character</h1>
                <p>Add a new Hero to your roster!</p>
                <Form className="createForm" onSubmit={createCharacter}>
                    <FormGroup style={styles.toCenter}>
                    <Label htmlFor="name">Create Your Name</Label>
                    <div style={styles.formFlex}>
                    <Input style={styles.inputBox} required id="nameField" onChange={(e) => setName(e.target.value)} value={name} placeholder="*Name" />
                    
                    <Button type="button" onClick={() => NameRandomizer()}>Randomize Your Name</Button>
                    </div>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="alignment">Select Your Alignment</Label>
                    <Input style={styles.inputBox} type="select" onChange={(e) => setAlignment(e.target.value)} value={alignment} placeholder="Alignment">
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
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="race">Select Your Race</Label>
                    <Input style={styles.inputBox} type='select' onChange={(e) => setRace(e.target.value)} value= {race} placeholder="Race">
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
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="charClass">Select Your Character Class</Label>
                    <Input style={styles.inputBox} type='select' onChange={(e) => setCharClass(e.target.value)} value={charClass} placeholder="Character Class">
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
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="appearance">Set an Appearance</Label>
                    <Input style={styles.inputBox} type='textarea' onChange={(e) => setAppearance(e.target.value)} value={appearance} placeholder="Appearance" />
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="personality">Set a Personality</Label>
                    <Input style={styles.inputTextArea} type='textarea' onChange={(e) => setPersonality(e.target.value)} value={personality} placeholder="Personality" />
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="description">Describe Your Character</Label>
                    <Input style={styles.inputTextArea} type='textarea' onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Description" />
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="background">Set a Background</Label>
                    <Input style={styles.inputTextArea} type='textarea' onChange={(e) => setBackground(e.target.value)} value={background} placeholder="Background" />
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="campaign name">Create a Campaign Name</Label>
                    <Input style={styles.inputBox} onChange={(e) => setCampaignName(e.target.value)} value={campaignName} placeholder="Campaign Name" />
                    </FormGroup>
                    <br />
                    <div>
                    <Button class="editBtn" type='submit' onClick={notify}>Create!</Button>
                    
                    </div>
                </Form>
                <div id="feedback">
                    <ToastContainer closeButton={false} position="bottom-right" progressClassName="toastProgress"/>
                </div>
            </div>
        </div>
    )
}

export default Radium(CreateCharacter);