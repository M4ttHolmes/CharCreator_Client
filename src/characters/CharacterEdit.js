import React, {useState} from 'react';

const updateCharacter = (props) => {
    const [editName, setEditName] = useState(props.createCharacter.name)
    const [editAppearance, setEditAppearance] = useState(props.createCharacter.appearance)
    const [editPersonality, setEditPersonality] = useState(props.createCharacter.personality)
    const [editDescription, setEditDescription] = useState(props.createCharacter.description)
    const [editBackground, setEditBackground] = useState(props.createCharacter.background)
    const [editRace, setEditRace] = useState(props.createCharacter.race)
    const [editCharClass, setEditCharClass] = useState(props.createCharacter.charClass)
    const [editAlignment, setEditAlignment] = useState(props.createCharacter.alignment)
    const [editCampaignName, setEditCampaignName] = useState(props.createCharacter.campaignName)
}