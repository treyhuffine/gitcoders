import AppDispatcher from "../dispatcher";
import Actions from "../constants";
import AppEventEmitter from "./AppEventEmitter";
import API from "../API"

let _userProfile = {
  githubData: {}
};

class ProfileEventEmitter extends AppEventEmitter {
  getUserProfile() {
    console.log(_userProfile);
    return _userProfile;
  }
}

let ProfileStore = new ProfileEventEmitter();

AppDispatcher.register(action => {
  switch(action.actionType) {
    case Actions.GET_USER_PROFILE:
      console.log("payload****", action.payload);
      _userProfile = action.payload;
      console.log("GETTING USER", _userProfile);
      ProfileStore.emitChange();
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

export default ProfileStore;
