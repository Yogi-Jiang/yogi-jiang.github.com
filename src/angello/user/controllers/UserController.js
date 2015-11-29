/**
 * Created by wanjie on 2015/11/27.
 */
angular.module("Angello.User")
    .controller("UserCtrl", function ($routeParams, user, stories) {
        var myUser = this;
        myUser.userId = $routeParams["userId"];
        myUser.user = user;

        myUser.getAssignedStories = function (userId, stories) {
            var AssignedStories = [];

            for (var i = 0, len = stories.length; i < len; i++) {
                var story = stories[i];
                if (story.assignee == userId) {
                    AssignedStories.push(story);
                }
            }
            return AssignedStories;
        };

        myUser.stories = myUser.getAssignedStories(myUser.userId, stories);
    });