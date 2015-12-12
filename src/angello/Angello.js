/**
 * Created by wanjie on 2015/11/17.
 */
var myModule = angular.module("Angello",
    [
        "ngRoute",
        "ngAnimate",
        "ngMessages",
        "Angello.Common",
        "Angello.Dashboard",
        "Angello.Storyboard",
        "Angello.User",
        "angularModalService",
        "Angello.Modal"
    ]);

myModule.config(function ($routeProvider, $provide) {

    //routes
    $routeProvider
        .when("/", {
        templateUrl: "src/angello/storyboard/tmpl/storyboard.html",
        controller: "StoryboardCtrl",
        controllerAs: "storyboard"
        })
        .when("/dashboard", {
            templateUrl: "src/angello/dashboard/tmpl/dashboard.html",
            controller: "DashboardCtrl",
            controllerAs: "dashboard"
        })
        .when("/users", {
            templateUrl: "src/angello/user/tmpl/users.html",
            controller: "UsersCtrl",
            controllerAs: "users"
        })
        .when("/users/:userId", {
            templateUrl: "src/angello/user/tmpl/user.html",
            controller: "UserCtrl",
            controllerAs: "myUser",
            resolve: {
                user: function ($route, $routeParams, UsersModel) {
                    var userId = $route.current.params["userId"] || $routeParams["userId"];
                    return UsersModel.fetch(userId);
                },
                stories: function (StoriesModel) {
                    return StoriesModel.stories;
                }
            }
        })
        .otherwise({ redirectTo: "/"});

    //decorators
    $provide.decorator("$log", function ($delegate) {
        function timeStamp() {
            var oNow = new Date();
            var date = [fillZero(oNow.getMonth() + 1), fillZero(oNow.getDate()), oNow.getFullYear()];
            var time = [fillZero(oNow.getHours()), fillZero(oNow.getMinutes()), fillZero(oNow.getSeconds())];
            var suffix = time[0] < 12 ? "AM" : "PM";
            time[0] > 12 ? time[0] - 12 : time[0];
            time[0] = time[0] || 12;
            return date.join("/") + " " + time.join(":") + " " + suffix;
        }

        function fillZero(n) {
            return n < 10 ? "0" + n : "" + n;
        }

        var debugFn = $delegate.debug;

        $delegate.debug = function () {
            arguments[0] = timeStamp() + " - " + arguments[0];
            debugFn.apply(null, arguments);
        };
        return $delegate;
    });

});

myModule.value("STORY_TYPES",[
    {name: "新功能", sClass: "Feature"},
    {name: "改善", sClass: "Enhancement"},
    {name: "Bug修复", sClass: "Bug"}
]);

myModule.value("STORY_STATUSES",[
    {name: '还没做的'},
    {name: '正在做的'},
    {name: '等待评审的'},
    {name: '等待测试的'},
    {name: '已经做完的'}
]);

