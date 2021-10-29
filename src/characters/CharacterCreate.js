import React, {useState} from 'react';

function CreateCharacter(props) {
    const [name, setName] = useState("");
    const [appearance, setAppearance] = useState("");
    const [personality, setPeronality] = useState("");
    const [description, setDescription] = useState("");
    const [background, setBackground] = useState("");
    const [race, setRace] = useState("");
    const [charClass, setCharClass] = useState("");
    const [alignment, setAlignment] = useState("");
    const [campaignName, setCampaignName] = useState("");

    const postCharacter = (e) => {
        e.preventDefault();

        let url = 'http://localhost:3000/character/create';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                appearance: appearance,
                personality: personality,
                description: description,
                background: background,
                race: race,
                charClass: charClass,
                alignment: alignment,
                campaignName: campaignName
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM1NTQxMTUwLCJleHAiOjE2MzU2Mjc1NTB9.cS1-p-wOTQ0oQI4QBhzP8lql4g0bS-MS0dXGYcJxzT8"
            })
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            props.setCreateCharacter(false);
        })
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={postCharacter}>
            <input type='text' onChange={(e) => setName(e.target.value)} value= {name} placeholder="Name" />
            <input type='text' onChange={(e) => setAppearance(e.target.value)} value= {appearance} placeholder="Appearance" />
            <input type='text' onChange={(e) => setPeronality(e.target.value)} value= {personality} placeholder="Personality" />
            <input type='text' onChange={(e) => setDescription(e.target.value)} value= {description} placeholder="Description" />
            <input type='text' onChange={(e) => setBackground(e.target.value)} value= {background} placeholder="Background" />
            <input type='text' onChange={(e) => setRace(e.target.value)} value= {race} placeholder="Race" />
            <input type='text' onChange={(e) => setCharClass(e.target.value)} value= {charClass} placeholder="Character Class" />
            <input type='text' onChange={(e) => setAlignment(e.target.value)} value= {alignment} placeholder="Alignment" />
            <input type='text' onChange={(e) => setCampaignName(e.target.value)} value= {campaignName} placeholder="Campaign Name" />
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CreateCharacter;