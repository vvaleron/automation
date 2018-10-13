angular.module('UserService', []).factory('User', ['$http', '$rootScope', '$location', function($http, $rootScope, $location) {
    getFromCookie();
    
    function getFromCookie() {
        var cookie = getCookie();
        if (cookie && cookie.logedIn) {
            $http.post('/userId', cookie).
                success(function(data, status, headers, config) {
                    $rootScope.user = data;
                }).
                error(function(data, status, headers, config){
                    debugger
                })
        } else {
            $rootScope.user = null;
        }
    };
    
    function getCookie () {
        if (!document.cookie.length) {
            return null;
        }
        var cookie = document.cookie.split(';'),
            obj ={};
        
        for (var i=0; i < cookie.length; i++) {
            var arr = cookie[i].split('=');
            obj[arr[0].trim()] = arr[1];
        }
        return obj;
    }
    
    function isLoggedIn () {
        var cookie = getCookie();
        
        return $rootScope.user != null || cookie != null && cookie.logedIn;
    }

    function singUp(user, call) {
        $http.post('/singup', user).
            success(function(data, status, headers, config) {
                delete config.data.password;
                if (data.isExist) {
                    call();
                } else if (data.success) {
                    $rootScope.user = config.data;
                    $location.path('/user');
                }
            }).
            error(function(data, status, headers, config) {
                debugger
            });
    }
    
    function login (user) {
        $http.post('/login', user).
            success(function (data, status, headers, config) {
                if (data.empty) {
                    
                } else {
                    $rootScope.user = data;
                    $location.path('/user');
                }
                }).error(function (data, status, headers, config) {
                debugger
            });
    }
    
    $http.post('/morgan-test', {testData: 'ahaha'});
    
    return {
        login: login,
        isLoggedIn: isLoggedIn,
        singUp: singUp
    };
}]);