let APIURL = "";

switch(window.location.hostname) {
    case "localhost" || "127.0.0.1":
        APIURL = "http://localhost:3000"
        break;
    case "charcreator-client.herokuapp.com":
        APIURL = "https://charcreator.herokuapp.com"
} 

export default APIURL;