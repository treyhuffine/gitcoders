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
    $.get(`/userprofile/${username}`)
    .success(user => {
      console.log("PROFILE =======", user);
      ServerActionsCreator.getUserProfile(user);
    })
    .error(error => {
      console.log(error);
    })
  },
  updateUserInfo(info) {
    var username = "treyhuffine";
    $.post(`/user/${username}/update`, info)
    .success(user => {
      console.log(user);
    })
    .error(error => {
      console.log(error);
    })
  }
}
