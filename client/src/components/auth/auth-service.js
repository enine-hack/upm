// auth/auth-service.js
import axios from 'axios';
const service = axios.create({
  baseURL: `${process.env.REACT_APP_APIURL || ""}/api`,
  withCredentials: true
});
export default service;

function signup(email, password) {
  return service.post('/signup', {email, password}).then(response => response.data)
}
export {signup}

function loggedin() {
  return service.get('/loggedin').then(response => response.data)
}
export {loggedin}

function login(email, password) {
  return service.post('/login', {email, password}).then(response => response.data)
}
export {login}

function logout() {
  return service.post('/logout', {}).then(response => response.data)
}
export {logout}

function profilsettings(password) {
  
  console.log(password)
  return service.put('/profil', {password}).then(response => response.data)
}
export {profilsettings}


function profiledit(
    civility,
    firstname,
    lastname,
    dateOfBirth,
    numberAddress,
    typeofstreet,
    additionalAddress,
    zipcode,
    city,
    country,
    mobileNumber,
    idWechat,
    idLine
) {
  return service.post('/profiledit', {
    civility,
    firstname,
    lastname,
    dateOfBirth,
    numberAddress,
    typeofstreet,
    additionalAddress,
    zipcode,
    city,
    country,
    mobileNumber,
    idWechat,
    idLine
  })
    .then(response => response.data)
}
export {profiledit}

function deleteprofil() {
  return service.delete('/profil', {}).then(response => response.data)
}
export {deleteprofil}

function addfavbrand(brandid) {
  return service.post('/addfavbrandid', {brandid} ).then(response => response.data)
}
export {addfavbrand}

function addpendingbrand(brandname) {
  return service.post('/addnewbrandname', {brandname} ).then(response => response.data)
}
export {addpendingbrand}


function deleteonefavbrand(brandid) {
  return service.delete(`/favoritebrands/${brandid}`, {}).then(response => response.data)
}
export {deleteonefavbrand}


function deleteonependingbrand(brandname) {
  return service.put(`/pendingbrands`, {brandname}).then(response => response.data)
}
export {deleteonependingbrand}

