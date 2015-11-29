/**
 * Created by wanjie on 2015/11/22.
 */
angular.module("Angello.User")
    .directive("userstory", function () {

        var linker = function (scope, element, attrs) {
            element.mouseover(function () {
                element.css("opacity", ".9");
            }).mouseout(function () {
                element.css("opacity", "1");
            });
        };
        var controller = function ($scope) {};
        return {
            restrict: "A",
            controller: controller,
            controllerAs: "userStory",
            link: linker
        };
    });