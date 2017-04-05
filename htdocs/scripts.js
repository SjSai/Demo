var app= angular.module("gitUser", []);
app.controller("userCtrl", function($scope, $http){
    
     $scope.getUserProf = function () {
        var user = $scope.userProf;
        $scope.noData = true;
        var url = "https://api.github.com/users/"+user+"/repos"
        $http({
            url:url
        }).then(function (response) {
            if (response.message == "Not Found")
                $scope.noData = true;
            else {
                $scope.noData = false;
                $scope.repoInfo = response.data;
            }
        })
    }
})