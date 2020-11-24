// auth/auth-service.js
import axios from 'axios';
const service = axios.create({
  baseURL: 'http://localhost:5000/api',
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

export {profil}
function profil() {
  return service.get('/profil', {email, password}).then(response => response.data)
}











