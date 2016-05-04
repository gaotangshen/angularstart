'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.shows'
]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
config(function($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
      .state('state1', {
        url: "/state1",
        templateUrl: "view/partials/state1.html"
      })
      .state('state1.list', {
        url: "/list",
        templateUrl: "view/partials/state1.list.html",
        controller: function($scope) {
          $scope.items = ["A", "List", "Of", "Items"];
        }
      })
      .state('state2', {
        url: "/state2",
        templateUrl: "view/partials/state2.html"
      })
      .state('state2.list', {
        url: "/list",
        templateUrl: "view/partials/state2.list.html",
        controller: function($scope) {
          $scope.things = ["A", "Set", "Of", "Things"];
        }
      })
      .state('state3', {
        url: "/state3",
        templateUrl: "view/partials/state3.html"
      })
      .state('state3.list', {
        url: "/list",
        templateUrl: "view/partials/state3.list.html",
        controller : function($scope, $http) {
            // $http.jsonp('http://api.charged.fm/event/search.jsonp?callback=JSON_CALLBACK').success(function(data) {
            //     $scope.shows = data.data;
            // });
            $http.get("/app/events.json").success(function(data) {
              $scope.shows = data.data;
            });
            $scope.text = "Hello World!";
          }
        // controller: function($scope) {
        //   $scope.things = ["A", "Set", "Of", "Things"];
        // }
      });
  // $urlRouterProvider.html5Mode(true);
});
// app.config(["$locationProvider", function($locationProvider) {
//   $locationProvider.html5Mode(true);
// }]);
// config(["$locationProvider", function($locationProvider) {
//
// }]);