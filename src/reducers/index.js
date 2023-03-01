import usersReducer from './usersReducer'
import signupResponseReducer from './signupResponseReducer'
import gameReducer from './gameReducer'
import adminReducer from './adminReducer'
import searchReducer from './searchReducer'
import chatReducer from './chatReducer'

export default {
  user: usersReducer,
  signupResponse: signupResponseReducer,
  game: gameReducer,
  games: searchReducer,
  admin: adminReducer,
  chat: chatReducer,
}
