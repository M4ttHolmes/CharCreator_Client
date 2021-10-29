import {
    Route,
    Link,
    Switch
} from "react-router-dom";
import Home from "./Home";
import Search from "./Search"
import CreateCharacter from "../characters/CharacterCreate";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/create">Create Character</Link></li>
                    <li><Link to="/search">Search</Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/create"><CreateCharacter /></Route>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/search"><Search /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;