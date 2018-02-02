angular.module("taskList",[])
.controller("taskCtrl", function($scope) {

    //Создать временную переменную
    $scope.tempInput = "test";
    //Создать хранилище для всех заданий
    $scope.tasksArray = ["это задание", "второе задание"];
    //Создать ф-цию, которая переносит из временного хранилища в общие задания
    $scope.addNew = function() {
        if($scope.tempInput) {
            $scope.tasksArray.push($scope.tempInput);
            $scope.tempInput = "";
        } else  {
            console.log("Строка пуста");
        }
    }
    //Удаляющая ф-ция
    $scope.deleteTask = function (task) {
        var index = $scope.tasksArray.indexOf(task);
        $scope.tasksArray.splice(task,1);
    }
});