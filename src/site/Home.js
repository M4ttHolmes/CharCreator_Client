import { Link } from "react-router-dom";
import Reactstrap, { Row } from "reactstrap";
import Radium from "radium";

import Characters from "../characters/CharactersIndex";

const Home = () => {

    return(
        <div className="main">
            <div className="mainDiv">
                <h1>D&D Character Creator</h1>
                <p>Create/Manage your characters.</p>
                <hr />
                <h1>My Characters:</h1>
                <div id="characters">
                <Row>   
                    <Characters />
                </Row>    
            </div>
        </div>
    </div>
    );
};

export default Radium(Home);