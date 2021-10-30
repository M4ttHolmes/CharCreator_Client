import { Link } from "react-router-dom";
import Reactstrap, { Row } from "reactstrap";
import Radium from "radium";

import Characters from "../characters/CharactersIndex";

const Home = (props) => {

    return(
        <div className="main">
            <div className="mainDiv">
                <h1>D&D Character Creator</h1>
                <p>Create/Manage your characters.</p>
                <hr />
                <div id="characters">
                    <Characters sessionToken={props.sessionToken}/>   
            </div>
        </div>
    </div>
    )
};

export default Radium(Home);