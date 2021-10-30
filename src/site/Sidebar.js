import { Route, Link, Switch } from "react-router-dom";
import { Button } from "reactstrap"
import Home from "./Home";
import Search from "./Search"
import CreateCharacter from "../characters/CharacterCreate";

const Sidebar = (props) => {
    return(
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/home"><button className="navButton" color="danger">Home</button></Link></li>
                    <li><Link to="/create"><button className="navButton" color="danger">Create Character</button></Link></li>
                    <li><Link to="/search"><button className="navButton" color="danger">Search</button></Link></li>
                    <li><button className="navButton" color="warning" onClick={props.clearLocalStorage}>Logout</button></li>
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