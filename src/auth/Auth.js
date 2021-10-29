import React, {useState} from 'react';
import Radium from 'radium';
import backgroundImage from "../assets/DDCC.jpg"

const styles = {
    
    login: {
        display: "table",
        width: "100%", 
        backgroundSize: "cover",
        backgroundColor: "gray",
        border: "solid"
    }
}

const Auth = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [login, setLogin] = useState(true);

const title = () => {
    return !login ? 'Register A New User' : 'Login'
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
        <label htmlFor="username">Username:</label>
        <br/>
        <input type='text' id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br/>
        <label htmlFor="firstName">First Name:</label>
        <br/>
        <input type='text' id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br/>
        <label htmlFor="lastName">Last Name:</label>
        <br/>
        <input type='text' id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
) : null;

const handleSubmit = event => {
    /*START HERE 1:29:30 in video */
}

    return (
        <div style={styles.login}>
            <form id="Login">
                <button onClick={loginToggle}>Login / Signup Toggle</button>
                <br/>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor="email">Email:</label>
                <br/>
                <input type='text' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label htmlFor="password">Password:</label>
                <br/>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button type="submit">Create User</button>
            </form>
        </div>
    )
}

export default Auth;