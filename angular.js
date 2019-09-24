#angular.js
```
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module('WebApplication1',[]);
app.controller("HelloWorldCtrl",function($scope){
    $scope.firstName;
    $scope.lastName;
    $scope.collegs=[
        {deptname:"IT - BTECH"},
        {deptname:"BE - MECH"},
        {deptname:"BE - CSE"},
        {deptname:"BE - CIVIL"},
        {deptname:"BE - ECE"},
    ];
    $scope.TextName = function(){
        $scope.fullName=$scope.firstName + $scope.lastName ;
    }
});

```
