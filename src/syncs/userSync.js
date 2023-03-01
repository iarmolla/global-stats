import { requests } from '../helpers/requests'
import { APIBaseUrl } from '../helpers/urls'

async function getUser(id) {
  return await requests.get(`${APIBaseUrl}/user/${id}`)
}

async function getAdminUser(id) {
  return await requests.get(`${APIBaseUrl}/users/${id}`)
}

function banUser(id) {
  return requests.post(`${APIBaseUrl}/users/${id}/ban`)
}

function saveUser(user) {
  return requests.post(`${APIBaseUrl}/users/create`, user)
}

function loginUser(user) {
  return requests.post(`${APIBaseUrl}/auth/login`, user)  
}

function addGameStats(data) {
  return requests.post(`${APIBaseUrl}/users/game`, data)  
}

function getFriends(id) {
  return requests.get(`${APIBaseUrl}/users/${id}/friends`)
}

export default {
  saveUser,
  getUser,
  loginUser,
  getAdminUser,
  banUser,
  addGameStats,
  getFriends
}