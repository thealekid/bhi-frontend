const BASEURL = "http://localhost:3000/"
const LOGINURL = BASEURL + "login"
const SIGNUPURL = BASEURL + "signup"


const get = (url) => {
    return fetch(url)
}

const post = (url, body) => {
    const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body)
    } 
    return fetch (url, configObj)
}

const signup = (body) => 
    post(SIGNUPURL, body)
    .then(response => response.json())


const login = (body) => 
    post(LOGINURL, body)
    .then(response => response.json())


export default {signup, login  }