import AppDispatcher from "../dispatcher";
import Actions from "../constants";
import AppEventEmitter from "./AppEventEmitter";
import API from "../API";

let _activeRepo = {
  imageLink: [],
  projectData: {},
  technology: []
}

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

export default ActiveRepoStore;
