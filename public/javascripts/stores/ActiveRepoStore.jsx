import AppDispatcher from "../dispatcher";
import Actions from "../constants";
import AppEventEmitter from "./AppEventEmitter";
import API from "../API";

var nullRepo = function(){
  return {
    imageLinks: [],
    projectData: {},
    technology: [],
    languages: []
  }
}

var _activeRepo = nullRepo();

class ActiveRepoEventEmitter extends AppEventEmitter {
  getActiveRepo() {
    return _activeRepo;
  }
}

let ActiveRepoStore = new ActiveRepoEventEmitter();

AppDispatcher.register(action => {
  switch(action.actionType) {
    case Actions.GET_ACTIVE_REPO:
      _activeRepo = action.payload;
      console.log("GETTING REPO", _activeRepo);
      ActiveRepoStore.emitChange();
      break;
    case Actions.CLEAR_ACTIVE_REPO:
      _activeRepo = nullRepo();
      console.log('CLEAR REPO', _activeRepo);
      ActiveRepoStore.emitChange();
      break;


    default:
    // do nothing
  }
});

export default ActiveRepoStore;
