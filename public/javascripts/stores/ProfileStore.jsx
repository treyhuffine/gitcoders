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

    default:
    // do nothing
  }
});

export default ProfileStore;
