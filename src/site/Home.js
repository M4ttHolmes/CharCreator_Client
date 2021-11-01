import { Link } from "react-router-dom";
import Reactstrap, { Row } from "reactstrap";
import Radium from "radium";
import Characters from "../characters/CharactersIndex";
import HomeDragon from "../assets/neverwinter.jpg"

const styles =  {
    headerImg: {
        height: "220px",
        width: "100%",
        objectFit: "cover"
    }

}

const Home = (props) => {

    return(
        <div className="main">
            <div className="mainDiv">
                <img alt="dragon" style={styles.headerImg} src={HomeDragon} />
                <hr />
                <div id="characters">
                    <Characters sessionToken={props.sessionToken}/>   
            </div>
        </div>
    </div>
    )
};

export default Radium(Home);