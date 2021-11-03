import React, {useState} from 'react';
import { Form, FormGroup, ModalHeader, Button, Label, Input, Modal, ModalBody } from 'reactstrap';
import Radium from 'radium'
import APIURL from '../helpers/environment';


const UpdateCharacter = (props) => {
    const [editName, setEditName] = useState(props.updatedCharacter.name);
    const [editAppearance, setEditAppearance] = useState(props.updatedCharacter.appearance);
    const [editPersonality, setEditPersonality] = useState(props.updatedCharacter.personality);
    const [editDescription, setEditDescription] = useState(props.updatedCharacter.description);
    const [editBackground, setEditBackground] = useState(props.updatedCharacter.background);
    const [editRace, setEditRace] = useState(props.updatedCharacter.race);
    const [editCharClass, setEditCharClass] = useState(props.updatedCharacter.charClass);
    const [editAlignment, setEditAlignment] = useState(props.updatedCharacter.alignment);
    const [editCampaignName, setEditCampaignName] = useState(props.updatedCharacter.campaignName);

    const characterUpdate = (event, character) => {
        event.preventDefault();
        console.log(props);
        fetch(`${APIURL}/character/update/${props.updatedCharacter.id}`, {

            method: "PUT",
            body: JSON.stringify({character: {
                name: editName,
                appearance: editAppearance,
                personality: editPersonality,
                description: editDescription,
                background: editBackground,
                race: editRace,
                charClass: editCharClass,
                alignment: editAlignment,
                campaignName: editCampaignName}}),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })
            .then(res => res.json())
            .then(json => {
            console.log(json)
            props.getMyCharacters();
            props.updateOff();
            

        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Update a Character</ModalHeader>
            <ModalBody>
                <Form onSubmit={characterUpdate}>
                    <FormGroup>
                        <Label htmlFor="name">Edit Name</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="alignment">Edit Alignment</Label>
                        <Input type="select" value={editAlignment} onChange={(e) => setEditAlignment(e.target.value)}>
                            <option hidden>--Choose an Alignment</option>
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
                        <Label htmlFor="race">Edit Race</Label>
                        <Input type="select" value={editRace} onChange={(e) => setEditRace(e.target.value)}>
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
                        <Label htmlFor="charClass">Edit Character Class</Label>
                        <Input type="select" value={editCharClass} onChange={(e) => setEditCharClass(e.target.value)}>
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
                        <Label htmlFor="appearance">Edit Appearance</Label>
                        <Input name="appearance" type="textarea" value={editAppearance} onChange={(e) => setEditAppearance(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="personality">Edit Personality</Label>
                        <Input name="personality" type="textarea" value={editPersonality} onChange={(e) => setEditPersonality(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Edit Description</Label>
                        <Input name="description" type="textarea" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="background">Edit Background</Label>
                        <Input name="background" type="textarea" value={editBackground} onChange={(e) => setEditBackground(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="campaignName">Edit Campaign Name</Label>
                        <Input name="campaignName" value={editCampaignName} onChange={(e) => setEditCampaignName(e.target.value)}/>
                    </FormGroup>
                    <Button className="editBtn" type="submit">Update Your Character</Button>
                </Form>
                <div id="feedback">

                </div>
            </ModalBody>
        </Modal>
        
        
    )
}

export default UpdateCharacter;