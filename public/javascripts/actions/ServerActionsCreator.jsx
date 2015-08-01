import AppDispatcher from "../dispatcher"
import Actions from "../constants"

export default {
  getCurrentUser(payload) {
    AppDispatcher.dispatch({
      actionType: GET_CURRENT_USER,
      payload
    })
  },
  receiveResources(payload) {
    AppDispatcher.dispatch({
      actionType: Actions.RECEIVE_RESOURCES,
      payload
    })
  },
  addNewResource(resource) {
    AppDispatcher.dispatch({
      actionType: Actions.ADD_NEW_RESOURCE,
      resource
    })
  },
  deleteResource(resourceIndex) {
    AppDispatcher.dispatch({
      actionType: Actions.DELETE_RESOURCE,
      resourceIndex
    })
  }
}
