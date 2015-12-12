/**
 * Created by wanjie on 2015/11/29.
 */
angular.module("Angello.Common")
    .controller("MainCtrl", function ($scope, ModalService) {
        var main = this;
        function YesNoController() {}
        main.showAModal = function() {

            // Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
                templateUrl: "src/angello/modal/tmpl/yesno.html",
                controller: "YesNoController"
            }).then(function(modal) {
                // The modal object has the element built, if this is a bootstrap modal
                // you can call 'modal' to show it, if it's a custom modal just show or hide
                // it as you need to.
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = result ? "You said Yes" : "You said No";
                });
            });

        };
    });