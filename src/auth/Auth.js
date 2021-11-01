import React, {useState} from 'react';
import Radium from 'radium';
import '../App.css';
import DDlogo from '../assets/DDlogo.png'

const styles = {
    
    login: {
        display: "table", 
        backgroundSize: "cover",
        backgroundColor: "#e7e7db",
        textAlign: "center",
        margin: "auto"
    },


    logo: {
        border: "black"
    }
}

const Auth = (props) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [login, setLogin] = useState(true);

const logsignbut = () => {
    return !login ? 'Go Back To Sign In' : 'Sign Up'
}

const title = () => {
    return !login ? 'Register A New User' : 'Sign In'
}

const submitBut = () => {
    return !login ? 'Create User' : 'Login'
}


const loginToggle = (e) => {
    e.preventDefault();

    setLogin(!login)

    setEmail('');
    setPassword('');
    setUsername('');
    setFirstName('');
    setLastName('');
}

const signupFields = () => !login ?
(
    <div>
        <label htmlFor="username" id="userlabel"><strong>Username:</strong></label>
        <br/>
        <input required type='text' id="username" placeholder="Create A Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br/>
        <label htmlFor="firstName"><strong>First Name:</strong></label>
        <br/>
        <input required type='text' id="firstName" placeholder="Your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br/>
        <label  required htmlFor="lastName"><strong>Last Name:</strong></label>
        <br/>
        <input required type='text' id="lastName" placeholder="Your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
) : null;

const handleSubmit = event => {
    event.preventDefault();

    let reqBody = login ?
    {
        user: {
            email: email,
            password: password,
        }
    } :
    {
        user: {
            email: email,
            password: password,
            username: username,
            firstName: firstName,
            lastName: lastName,
        }
    }

    let url = login ?
    'http://localhost:3000/user/login' :
    'http://localhost:3000/user/register';

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: new Headers({
            'Content-Type' : 'application/json'
        })
    })
    .then(response => response.json())
    .then(json => {
        props.updateLocalStorage(json.sessionToken)
        props.updateUserName(json.user.username)
    })
    .catch(err => console.log(err))
}

    return (
        <div style={styles.login}>
            <form id="Login">
                <img style={styles.logo} src={DDlogo} alt="ddlogoauth" id="ddlogo"/>
                <hr style={styles.hr1} />
                <button className="btn-lg btn-danger btn-block" onClick={loginToggle}>{logsignbut()}</button>
                <br/>
                <h1 class="display-1">{title()}</h1>
                <hr style={styles.hr2} />
                <label htmlFor="email"><strong>Email:</strong></label>
                <br/>
                <input required type="email" id="email" placeholder="Ex: dragon@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label htmlFor="password"><strong>Password:</strong></label>
                <br/>
                <input required type="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                {signupFields()}
                <br/>
                <button type="submit" className="btn-lg btn-dark btn-block" onClick={handleSubmit}>{submitBut()} </button>
            </form>
        </div>
    )
}

export default Radium(Auth);