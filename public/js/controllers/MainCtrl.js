angular.module('MainCtrl', [
    'UserService'
]).controller('MainController', ['$scope', '$rootScope', 'User', function($scope, $rootScope, User) {
    
    $scope.singupUser = {};

    $scope.singupFormSubmit = function () {
        function userExist () {
            $scope.active = "userExist";
        }
        delete $scope.singupUser.password2;
        User.singUp($scope.singupUser, userExist);
    };
    
    $scope.login = function () {
        User.login($scope.singupUser);
    };
    //console.log('$scope in MainController', $scope);
}]);