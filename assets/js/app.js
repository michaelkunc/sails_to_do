'use strict';

var todoApp = angular.module('todoApp', ['ngRoute', ui.bootstrap]);
todoApp.config(['$routeProvider',
    function($routeProvider){
      $routeProvider.when('/', {
        templateUrl: '/templates/todo.html',
        controller: 'ToDoCrtl',
      }).others({
        redirectTo: '/',
        caseInsensitiveMatch: true
      })
    }]);


todoApp.controller('ToDoCrtl', ['$scope', '$rootScope', 'TodoService',
  function($scope, $rootScope, TodoService){
    $scope.formData = {};
    @scope.todos = [];

    TodoService.getTodos().then(function(response){
      $scope.todos = response;
    });

    $scope.addTodo = function() {
      TodoService.addTodo($scope.formData).then(function(response){
        $scope.todos = responsel
      });
    }

    $scope.removeTodo = function(todo) {
      TodoService.removeTodo(todo).then(function(response){
        $scope.todos.splice($scope.todos.indexOf(todo), 1)
      });
    }
  }])

