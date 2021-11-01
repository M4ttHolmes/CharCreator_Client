import { Route, Link, Switch } from "react-router-dom";
import { Button } from "reactstrap"
import Home from "./Home";
import Search from "./Search"
import CreateCharacter from "../characters/CharacterCreate";
import Ampersand from "../assets/ampersand.png"

const Sidebar = (props) => {
    return(
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <img alt="dnd-ampersand" id="ampersand" src={Ampersand}/> 
                <hr />
                <h5>Welcome {props.username}!</h5>
                <ul className="sidebar-list list-unstyled">
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
        </div>
    );
};

export default Sidebar;