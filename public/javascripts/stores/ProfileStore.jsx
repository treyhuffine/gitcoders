import AppDispatcher from "../dispatcher";
import Actions from "../constants";
import AppEventEmitter from "./AppEventEmitter";
import API from "../API"

let _userProfile = {
  user: {
    githubData: {}
  },
  repos: {
    repoList: []
  }
};

class ProfileEventEmitter extends AppEventEmitter {
  getUserProfile() {
    return _userProfile;
  }
}

let ProfileStore = new ProfileEventEmitter();

AppDispatcher.register(action => {
  switch(action.actionType) {
    case Actions.GET_USER_PROFILE:
      _userProfile = action.payload;
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
