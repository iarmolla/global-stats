import { requests } from '../helpers/requests'
import { APIBaseUrl } from '../helpers/urls'

async function getChat(userId, friendId) {
  return await requests.post(`${APIBaseUrl}/chat/${friendId}`, {userId})
}

export default {
  getChat,
}
