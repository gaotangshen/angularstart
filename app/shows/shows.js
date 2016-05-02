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
        // $http.jsonp('http://api.charged.fm/event/search.jsonp?callback=JSON_CALLBACK').success(function(data) {
        //     $scope.shows = data.data;
        // });
        $http.get("/app/events.json").success(function(data) {
            $scope.shows = data.data;
        });
        $scope.text = "Hello World!";
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
// .controller('ShowsCtrl', function ($scope) {
//     $scope.shows = [
//         {'name': 'Nexus S',
//             'snippet': 'Fast just got faster with Nexus S.'},
//         {'name': 'Motorola XOOM™ with Wi-Fi',
//             'snippet': 'The Next, Next Generation tablet.'},
//         {'name': 'MOTOROLA XOOM™',
//             'snippet': 'The Next, Next Generation tablet.'}
//     ];
// });