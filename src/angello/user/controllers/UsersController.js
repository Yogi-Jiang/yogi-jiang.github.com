/**
 * Created by wanjie on 2015/11/28.
 */
angular.module("Angello.User")
    .controller("UsersCtrl", function (UsersModel) {
        var users = this;

        users.users = UsersModel.users;
        users.newUser = {name: "", email: ""};

        users.showMessages = function (field) {
            return users.newUserForm[field].$touched
                    users.newUserForm.$submitted;
        };

        var resetForm = function () {
            users.newUserForm.$setPristine();
            users.newUserForm.$setUntouched();
        };

        function ID() {
            return "_" + Math.random.toString().substring(2,9);
        }
        users.addUser = function () {
            users.newUser.id = ID();
            UsersModel.users.push(users.newUser);
            resetForm();
            users.newUser = {name: "", email: ""};
        };

        users.updateUser = function (id, user) {

        };

        users.removeUser = function (id) {
            for (var i = 0, len = UsersModel.users.length; i < len; i++) {
                if (UsersModel.users[i].id == id) {
                    UsersModel.users.splice(i, 1);
                }
            }
        };

    });