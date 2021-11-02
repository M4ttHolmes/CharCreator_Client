import { Route, Link, Switch } from "react-router-dom";
import { Button, Col, Row, Container } from "reactstrap"
import Home from "./Home";
import Search from "./Search"
import CreateCharacter from "../characters/CharacterCreate";
import Ampersand from "../assets/ampersand.png"

const styles = {
    hr: {
        color: "black",
        height: "2px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "0",
        marginBottom: "0",
        width: "75%"
    }
}

const Sidebar = (props) => {
    return(
        <Row className="sidebar">
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
        </Row>
    );
};

export default Sidebar;