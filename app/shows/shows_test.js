'use strict';

describe('myApp.shows module', function() {
    describe('Shows Ctrl', function() {
        //scope used in this test
        var scope, $httpBackend;

        //mock myApp.show and inject dependency (模拟我们的Application模块并注入我们自己的依赖)
        beforeEach(angular.mock.module('myApp.shows'));

        //imitate controller, and include $rootScope and $controller(模拟Controller，并且包含 $rootScope 和 $controller)
        beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_) {
            //setup $httpBackend(设置$httpBackend冲刷$http请求)
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', '/app/events.json').respond({"data":[{
                id: 1,
                name: 'Bob'
            }, {
                id: 2,
                name: 'Jane'
            }]});
            //create empty scope(创建一个空的 scope)
            scope = $rootScope.$new();

            //declare controller and inject scope(声明 Controller并且注入已创建的空的 scope)
            $controller('ShowsCtrl', {
                $scope: scope
            });
        }));

        // test start here(测试从这里开始)
        it('should have variable text = "Hello World!"', function() {
            expect(scope.text).toBe('Hello World!');
        });
        it('should fetch list of users', function() {
            $httpBackend.flush();
            console.log(scope.shows);
            expect(scope.shows.length).toBe(2);
            expect(scope.shows[0].name).toBe('Bob');
            //output
            for(var i=0;i<scope.shows.length;i++){
                console.log(scope.shows[i].name);
            }
        });
    });
});