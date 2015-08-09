import AppDispatcher from "../dispatcher";
import Actions from "../constants";
import API from '../API';

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
  updateUserInfo(info, currentUser) {
    API.updateUserInfo(info, currentUser);
  },
  clearActiveRepo() {
    AppDispatcher.dispatch({
      actionType: Actions.CLEAR_ACTIVE_REPO
    })
  }
}
