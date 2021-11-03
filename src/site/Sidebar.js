import { Route, Link, Switch } from "react-router-dom";
import { Button, Col, Row, Container } from "reactstrap"
import Home from "./Home";
import Search from "./Search"
import CreateCharacter from "../characters/CharacterCreate";
import Ampersand from "../assets/ampersand.png"
import { useState } from "react";

const styles = {
    hr: {
        color: "black",
        height: "2px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "0",
        marginBottom: "0",
        width: "75%"
    },

    hrSpace: {
        color: "black",
        height: "2px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "0",
        marginBottom: "0",
        width: "75%",
        marginBottom: "175px"
    },

    dangerZone: {
        backgroundColor: "black",
    }
}
//}


const Sidebar = (props) => {


    const deleteUser = () => {
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
            props.clearLocalStorage();
        } else {
            console.log("Delete cancelled.");
        }
    }

    return(
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <img alt="dnd-ampersand" id="ampersand" src={Ampersand}/> 
                <br />
                <h5>Welcome {props.firstName}!</h5>
                <p style={{fontSize: "14px"}}>(username: {props.username})</p>
                <ul className="sidebar-list list-unstyled">
                    <li><hr style={styles.hr}/></li>
                    <li><Link to="/home"><Button className="navButton" color="danger" outline>Home</Button></Link></li>
                    <li><Link to="/create"><Button className="navButton" color="danger" outline>Create Character</Button></Link></li>
                    <li><Link to="/search"><Button className="navButton" color="danger" outline>Search</Button></Link></li>
                    <li><Link to="/"><Button className="navButton" color="warning" outline onClick={props.clearLocalStorage}>Logout</Button></Link></li>
                    <li><hr style={styles.hrSpace}/></li>
                    <li><Button style={styles.dangerZone} className="navButton" color="danger" outline onClick={deleteUser}>Delete My Account</Button></li>
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/"><Home sessionToken={props.sessionToken}/></Route>
                    <Route exact path="/create"><CreateCharacter sessionToken={props.sessionToken}/></Route>
                    <Route exact path="/home"><Home sessionToken={props.sessionToken}/></Route>
                    <Route exact path="/search"><Search /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;