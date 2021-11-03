import React, {useState} from 'react';
import { Form, FormGroup, ModalHeader, Button, Label, Input, Modal, ModalBody } from 'reactstrap';
// const Delete = (props) => {



const Delete = (props) => {
    const proceed = window.confirm("Are you certain you wish to delete your own user account? Your characters will remain, but you will no longer be able to access them. This is a permanent action that cannot be undone.");
    if (proceed) {

        console.log('User Delete Function Called');

        const fetch_url = `http://localhost:3000/user/delete/loggedInUser`;

        fetch(fetch_url, {
            method: 'DELETE',
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })

        return(
            <>
            </>
            // <Modal isOpen={true}>
            //     <ModalHeader>Are you sure you want to delete your user?</ModalHeader>
            //         <ModalBody>
            //             <Button className="deleteBtn" type="button" onClick={DeleteUser}>Yes, Delete User</Button>
            //             <Button className="cancelDel" type="button" onClick={props.deleteOff}>No, Go Back</Button>
            //         </ModalBody>
            // </Modal>
        )
    } else {
        console.log("Delete cancelled.");
    }
}
//}




export default Delete;