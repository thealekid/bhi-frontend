const BASEURL = "http://localhost:3000/"
const LOGINURL = BASEURL + "login"
const SIGNUPURL = BASEURL + "signup"
const VALIDATEURL = BASEURL + "validate"
const SHOPSEARCHURL = BASEURL + "shopsearch"
const SHOPURL = BASEURL + "shops"
const NEWSHOPCOMMENTURL = BASEURL + "shop_comments"

const ADMINLOGINURL = BASEURL + "adminlogin"
const ADMINSIGNUPURL = BASEURL + "adminsignup"
const ADMINVALIDATEURL = BASEURL + "adminvalidate"
const ADMINAPPROVEDUSERSURL = BASEURL + "unapproved"
const ADMINCONFIRMATIONURL = BASEURL + "approved"

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

const patch = (url, body) => {
    const configObj = {
        method: "PATCH",
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

const searchShops = (body) => authPost (SHOPSEARCHURL, body).then(response => response.json())

const validate = () => get(VALIDATEURL).then(response => response.json())

const signup = (body) => 
    post(SIGNUPURL, body)
    .then(response => response.json())


const login = (body) => 
    post(LOGINURL, body)
    .then(response => response.json())

const getShop = (id) =>
    get(`${SHOPURL}/${id}`)
    .then(response => response.json())

const postComment = (body) =>
    authPost(NEWSHOPCOMMENTURL, body)
    .then(response => response.json())
    

// ADMIN
const adminapproved = () => get(ADMINAPPROVEDUSERSURL).then(response => response.json())
const adminvalidate = () => get(ADMINVALIDATEURL).then(response => response.json())

const adminsignup = (body) => 
        post(ADMINSIGNUPURL, body)
        .then(response => response.json())
    
    
const adminlogin = (body) => 
        post(ADMINLOGINURL, body)
        .then(response => response.json())

const adminconfirmed = (body) => 
        patch(ADMINCONFIRMATIONURL, body)
        .then(response => response.json())


export default {signup, login, validate, searchShops, adminvalidate, adminsignup, adminlogin, adminapproved, adminconfirmed, getShop, postComment}