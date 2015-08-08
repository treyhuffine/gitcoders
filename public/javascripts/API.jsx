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
  },
  updateActiveProjects(projects, currentUser) {
    $.ajax({
      url: `/user/${currentUser}/repos`,
      data: {repos: projects},
      type: 'PUT'
    })
    .success(repos => {
      console.log(repos);
    })
    .error(error => {
      console.log(error);
    })
  },
  getActiveRepo(repoId) {
    $.get(`/repo/${repoId}`)
    .success(repo => {
      console.log(repo);
    })
    .error(error => {
      console.log(error);
    })
  }
}
