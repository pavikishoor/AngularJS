##angular.js DropDown / Radio / Checkbox
```
var app=angular.module('WebApplication1',[]);
app.controller("HelloWorldCtrl",function($scope){
    $scope.firstName;
    $scope.lastName;
    $scope.TextName = function(){
        $scope.fullName=$scope.firstName + $scope.lastName ;
    }
    $scope.collegs=[
        {deptname:"IT - BTECH"},
        {deptname:"BE - MECH"},
        {deptname:"BE - CSE"},
        {deptname:"BE - CIVIL"},
        {deptname:"BE - ECE"}
    ];
  
    $scope.Topics = {
        option1:"I",
        option2:"II",
        option3:"III",
        option4:"IV"
    };
    $scope.Radio ={
        Female:true,
        Male:false
    };
    $scope.Check ={
        sport1:"Cricket",
        sport2:"Hockey",
        sport3:"Athletics"
    };
    $scope.Alert=function(){
        alert("HelloWorld");
    } 
    
});
```
