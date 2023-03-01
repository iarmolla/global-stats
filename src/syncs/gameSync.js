import { requests } from '../helpers/requests'
import { APIBaseUrl } from '../helpers/urls'

async function getGame(id) {
  return await requests.get(`${APIBaseUrl}/games/${id}`)
}

async function searchGame(searchTerm) {
  return await requests.post(`${APIBaseUrl}/games/search`, {searchTerm})
}

async function getUser(user) {
  return await requests.get(`${APIBaseUrl}/users/${user.id}`)
}

export default {
  getGame,
  searchGame,
  getUser
}