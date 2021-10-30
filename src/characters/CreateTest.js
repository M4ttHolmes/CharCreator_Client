import React, {useState} from "react";

const CreateCharacter = () => {
    const [name, setName] = useState("");
    const [appearance, setAppearance] = useState("");
    const [personality, setPersonality] = useState("");
    const [description, setDescription] = useState("");
    const [background, setBackground] = useState("");
    const [race, setRace] = useState("");
    const [charClass, setCharClass] = useState("");
    const [alignment, setAlignment] = useState("");
    const [campaignName, setCampaignName] = useState("");

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
                'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjM1NTQyMzE0LCJleHAiOjE2MzU2Mjg3MTR9.6REeRD5MaWEXAzXedSibhpcyesd80x8KK3TS0g9Ctn8",
                // "Authorization": props.sessionToken
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

    return (
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={createCharacter}>
                    <input type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
                    <input type='text' onChange={(e) => setAppearance(e.target.value)} value={appearance} placeholder="Appearance" />
                    <input type='text' onChange={(e) => setPersonality(e.target.value)} value={personality} placeholder="Personality" />
                    <input type='text' onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Description" />
                    <input type='text' onChange={(e) => setBackground(e.target.value)} value={background} placeholder="Background" />
                    <input type='text' onChange={(e) => setRace(e.target.value)} value= {race} placeholder="Race" />
                    <input type='text' onChange={(e) => setCharClass(e.target.value)} value={charClass} placeholder="Character Class" />
                    <input type='text' onChange={(e) => setAlignment(e.target.value)} value={alignment} placeholder="Alignment" />
                    <input type='text' onChange={(e) => setCampaignName(e.target.value)} value={campaignName} placeholder="Campaign Name" />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
                <div id="feedback">

                </div>
            </div>
        </div>
    )
}

export default CreateCharacter;