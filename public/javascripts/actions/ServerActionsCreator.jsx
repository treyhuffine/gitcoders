import AppDispatcher from "../dispatcher"
import Actions from "../constants"

export default {
  getCurrentUser(payload) {
    AppDispatcher.dispatch({
      actionType: Actions.GET_CURRENT_USER,
      payload
    })
  },
  getUserProfile(payload) {
    AppDispatcher.dispatch({
      actionType: Actions.GET_USER_PROFILE,
      payload
    })
  },
  getActiveRepo(payload) {
    AppDispatcher.dispatch({
      actionType: Actions.GET_ACTIVE_REPO,
      payload
    })
  }
}
