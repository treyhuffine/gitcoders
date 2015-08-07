import $ from './vendor/jquery.min';
import ServerActionsCreator from "./actions/ServerActionsCreator";

export default {
  getCurrentUser() {
    $.get("/currentuser")
    .success(user => {
      if (user.message) {
        return;
      }
      let newUser = user.user;
      newUser.repos = user.repos
      ServerActionsCreator.getCurrentUser(newUser);
    })
    .error(error => {
      console.log(error);
    })
  },
  getUserProfile(username) {
    console.log("IN API", username);
    $.get(`/user/${username}`)
    .success(user => {
      ServerActionsCreator.getUserProfile(user);
    })
    .error(error => {
      console.log(error);
    })
  },
  updateUserInfo(info, currentUser) {
    $.post(`/user/${currentUser}/update`, info)
    .success(user => {
      console.log(user);
    })
    .error(error => {
      console.log(error);
    })
  }
}
