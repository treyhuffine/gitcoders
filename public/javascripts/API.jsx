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
      newUser.repos = user.repos;
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
      swal('Awesome!', "Your profile has been updated successfuly", 'success');
      this.getCurrentUser();
    })
    .error(error => {
      swal("Oops...", "Something went wrong, try again later", "error");
    })
  },
  updateActiveProjects(projects, currentUser) {
    $.ajax({
      url: `/user/${currentUser}/repos`,
      data: {repos: projects},
      type: 'PUT'
    })
    .success(repos => {
      swal('Project updated!', "Look at all the cool stuff you've built", 'success');
    })
    .error(error => {
      swal("Oops...", "Something went wrong, try again later", "error");
    })
  },
  getActiveRepo(repoId) {
    $.get(`/repo/${repoId}`)
    .success(repo => {
      ServerActionsCreator.getActiveRepo(repo)
    })
    .error(error => {
      console.log(error);
    })
  },
  saveProject(project) {
    $.post(`/repo/${project.projectId}`, project)
    .success(project => {
      swal('Oh yeah!', "Your project has been updated successfuly", 'success');
    })
    .error(error => {
      swal("Oops...", "Something went wrong, try again later", "error");
    })
  }
}
