import { Route, Link, Switch } from "react-router-dom";
import { Button, Col, Row, Container } from "reactstrap"
import Home from "./Home";
import Search from "./Search"
import CreateCharacter from "../characters/CharacterCreate";
import Ampersand from "../assets/ampersand.png"
import Delete from "../auth/DeleteUser"
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
        marginBottom: "250px"
    }
}

const Sidebar = (props) => {
    
    // const [deleteUser, setDeleteUser] = useState(false)

    // const deleteOn = () => {
    //     setDeleteUser(true);
    // }

    // const deleteOff = () => {
    //     setDeleteUser(false);
    // }

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
                    <li><Link to="/deleteuser"><Button className="navButton" color="warning" outline onClick={props.clearLocalStorage}>Delete User</Button></Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/"><Home sessionToken={props.sessionToken}/></Route>
                    <Route exact path="/create"><CreateCharacter sessionToken={props.sessionToken}/></Route>
                    <Route exact path="/home"><Home sessionToken={props.sessionToken}/></Route>
                    <Route exact path="/search"><Search /></Route>
                    <Route exact path="/deleteuser"><Delete sessionToken={props.sessionToken}/></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;