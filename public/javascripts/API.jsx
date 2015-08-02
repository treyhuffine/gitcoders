import $ from './vendor/jquery.min';
import ServerActionsCreator from "./actions/ServerActionsCreator";

export default {
  getCurrentUser() {
    $.get("/currentuser")
    .success(user => {
      console.log("++++ API ++++", user);
      ServerActionsCreator.getCurrentUser(user)
    })
    .error(error => {
      console.log(error);
    })
  },
  getUserProfile(username) {
    console.log("IN API", username);
    $.get("/userprofile/" + username)
    .success(user => {
      console.log("PROFILE =======", user)
    })
    .error(error => {
      console.log(error);
    })
  }
}
