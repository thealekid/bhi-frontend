const BASEURL = "http://localhost:3000/"
const LOGINURL = BASEURL + "login"
const SIGNUPURL = BASEURL + "signup"
const VALIDATEURL = BASEURL + "validate"

const get = (url) => {
    const configObj = {
        headers: {
            "Authorisation": localStorage.token
        }
    }
    return fetch(url, configObj)
    
}

const post = (url, body) => {
    const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(body)
    } 
    return fetch (url, configObj)
}

const authPost = (url, body) => {
    const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorisation": localStorage.token
        },
        body: JSON.stringify(body)
    } 
    return fetch (url, configObj)
}

const validate = () => get(VALIDATEURL).then(response => response.json())

const signup = (body) => 
    post(SIGNUPURL, body)
    .then(response => response.json())


const login = (body) => 
    post(LOGINURL, body)
    .then(response => response.json())


export default {signup, login, validate}