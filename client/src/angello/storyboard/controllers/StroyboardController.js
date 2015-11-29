/**
 * Created by wanjie on 2015/11/17.
 */
angular.module("Angello.Storyboard")
    .controller("StoryboardCtrl", function (STORY_TYPES, STORY_STATUSES, StoriesModel, UsersModel) {//, StoriesModel, $log
        var storyboard = this;

        storyboard.currentStory = null;
        storyboard.editedStory = {};

        //storyboard.getStories = function () {
        //    StoriesModel.all()
        //        .then(function (result) {
        //            storyboard.stories = (result !== "null") ? result : {};
        //            $log.debug("RESULT", result);
        //        }, function (reason) {
        //            $log.debug("REASON", reason);
        //        });
        //};
        storyboard.isEmptyStatus = function (status) {
            var empty = true;
            if (storyboard.stories) {
                storyboard.stories.forEach(function (story) {
                    if (story.status === status) empty = false;
                });
            }

            return empty;
        };

        storyboard.insertAdjacent = function (target, story, insertBefore) {

            if (target === story) return;
            var fromIdx = storyboard.stories.indexOf(story);
            var toIdx = storyboard.stories.indexOf(target);

            if (!insertBefore) toIdx++;

            if (fromIdx >= 0 && toIdx >= 0) {
                storyboard.stories.splice(fromIdx, 1);
                if (toIdx > fromIdx) toIdx--;
                storyboard.stories.splice(toIdx, 0, story);
                story.status = target.status;
            }
        };

        storyboard.finalizeDrop = function (story) {};

        storyboard.changeStatus = function (story, status) {
            story.status = status.name;
        };

        storyboard.deleteStory = function (storyId) {
            var arr = storyboard.stories;
            for (var i = 0, len = arr.length; i < len; i++) {
                if (arr[i].id == storyId) {
                    arr.splice(i, 1);
                }
            }
            storyboard.resetForm();
        };

        function ID() {
            return "_" + Math.random.toString().substring(2,9);
        }

        storyboard.createStory = function () {
            var newStory = angular.copy(storyboard.editedStory);
            newStory.id = ID();
            for (var i = 0; i < storyboard.types.length; i++) {
                if (storyboard.types[i].name == newStory.type) {
                    newStory.sClass = storyboard.types[i].sClass;
                    break;
                }
            }
            storyboard.stories.push(newStory);
            storyboard.resetForm();
        };

        storyboard.setCurrentStory = function (story) {
            storyboard.currentStory = story;
            storyboard.editedStory = angular.copy(storyboard.currentStory);
        };

        storyboard.updateStory = function () {
            var fields = ["title", "description", "criteria", "status", "type", "reporter", "assignee"];
            fields.forEach(function(field) {
                storyboard.currentStory[field] = storyboard.editedStory[field];
            });
            storyboard.resetForm();
        };

        storyboard.updateCancel = function () {
            storyboard.resetForm();
        };

        storyboard.resetForm = function () {
            storyboard.currentStory = null;
            storyboard.editedStory = {};

            storyboard.detailsForm.$setPristine();
            storyboard.detailsForm.$setUntouched();
        };

        storyboard.stories = StoriesModel.stories;

        storyboard.statuses = STORY_STATUSES;

        storyboard.types = STORY_TYPES;

        storyboard.users = UsersModel.users;

        storyboard.detailsVisible = true;

        storyboard.setDetailsVisible = function (visible) {
            storyboard.detailsVisible = visible;
        };

        storyboard.showMessages = function (field) {
            return storyboard.detailsForm[field].$touched
                 && storyboard.detailsForm[field].$invalid;
        };
    });