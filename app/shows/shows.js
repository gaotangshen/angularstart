/**
 * Created by gshen on 4/29/16.
 */
'use strict';

angular.module('myApp.shows', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/shows', {
        templateUrl: 'shows/shows.html',
        controller: 'ShowsCtrl'
    });
}])

// .controller('ShowsCtrl', [function() {
//
// }]);
.controller('ShowsCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.jsonp('http://api.charged.fm/event/search.jsonp?callback=JSON_CALLBACK').success(function(data) {
            console.log(data);
            $scope.shows = data.data;
        });

        // $http.get("/app/events.json").success(function(data) {
        //     console.log(data.data);
        //     $scope.shows = data.data;
        // });
    }]);
// .controller('ShowsCtrl', function ($scope, $http) {
//     $scope.foo = "bar";
//     $scope.response = [];
//
//     $http.jsonp("http://api.charged.fm/event/search?callback=JSON_CALLBACK")
//         .success(function (json) {
//             console.log(json);
//             console.log(11);
//             $scope.shows = json.data.data;
//         });
//
// });
