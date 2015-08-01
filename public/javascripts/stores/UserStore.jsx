import AppDispatcher from "../dispatcher";
import Actions from "../constants";
import AppEventEmitter from "./AppEventEmitter";
import API from "../API"

let _currentUser = {};

class UserEventEmitter extends AppEventEmitter {
  getCurrentUser() {
    console.log(_currentUser);
    return _currentUser;
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register(action => {
  switch(action.actionType) {
    case Actions.GET_CURRENT_USER:
      console.log("payload****", action.payload);
      _currentUser = action.payload;
      console.log("GETTING USER", _currentUser);
      UserStore.emitChange();
      break;

    // case Actions.ADD_NEW_RESOURCE:
    //   _resources.push(action.resource);
    //   ResourceStore.emitChange();
    //   break;
    //
    // case Actions.DELETE_RESOURCE:
    //   _resources.splice(action.resourceIndex, 1);
    //   ResourceStore.emitChange();
    //   break;

    default:
    // do nothing
  }
});

export default UserStore;
