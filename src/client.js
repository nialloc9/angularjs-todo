var app = angular.module('toDoApp', ['ngRoute']);

app.controller('toDoCtrl', ['$scope', 'toDoListService', function($scope, toDoListService){
  $scope.todos = toDoListService.todos;
  $scope.changeToDo = toDoListService.changeToDo;
  $scope.deleteToDo = toDoListService.deleteToDo;
  $scope.createToDo = toDoListService.createToDo;
}]);

app.service('toDoListService', function(){
  this.todos = [
    {
      name: "Get Milk",
      completed: false
    },
    {
      name: "Wash dishes",
      completed: true
    }
  ];

  //change todo to completed or not completed
  this.changeToDo = function(index, tOrF){
    this.todos[index].completed = tOrF;
  };

  //delete todo from array
  this.deleteToDo = function(index){
    this.todos.splice(index, (index + 1));
  };

  //add todo to array
  this.createToDo = function(text){
    this.todos.push({name: text, completed: false});
  };
});

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'templates/toDoList.html',
    controller: "toDoCtrl"
  }).when('/activeToDo', {
    templateUrl: 'templates/activeToDoList.html'
  }).when('/completedToDo', {
    templateUrl: 'templates/completedToDoList.html'
  }).otherwise({
    templateUrl: 'templates/toDoList.html'
  });
});
