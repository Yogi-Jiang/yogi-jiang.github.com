/**
 * Created by wanjie on 2015/11/28.
 */
angular.module("Angello.Dashboard")
    .controller("DashboardCtrl", function (StoriesModel, STORY_STATUSES, STORY_TYPES) {
        var dashboard = this;
        dashboard.stories = StoriesModel.stories;
        dashboard.statuses = STORY_STATUSES;
        dashboard.types = STORY_TYPES;
    });