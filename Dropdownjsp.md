##Registration.jsp  Dropdown / radio / checkbox
```
<%-- 
    Document   : Registration
    Created on : Sep 24, 2019, 12:09:15 PM
    Author     : Administrator
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <script src="https://code.angularjs.org/1.6.9/angular.js"> </script>
        
        <script src="angular.js"> </script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body ng-app="WebApplication1">
        <form>
        <div ng-controller="HelloWorldCtrl" ng-init="TextName();">
        <h1>Hello World!</h1>
        First Name : <input type="text" name="firstName" ng-model="firstName"><br>
        Last Name  : <input type="text" name="lastName" ng-model="lastName"><br>        
        <!-- {{TestName()}} -->
        {{firstName}}{{ lastName}}<br>
       Full Name: <input type="text" name="fullName" ng-model="fullName"> 
        
        <ul>
            <li ng-repeat="dept in collegs"> {{dept.deptname}} </li> 
            
        </ul>
        Year :<select ng-model="topics">
            <option>{{ Topics.option1 }} </option>
            <option>{{ Topics.option2 }}</option>
            <option>{{ Topics.option3 }}</option>    
            <option>{{ Topics.option4 }}</option>
             </select>
        <br>
        <br>
        Age:<input type="radio" name="Age" ng-model="Radio.Female"> Male<br>
            <input type="radio" name="Age" ng-model="Radio.Male"> Female<br>
            
        Hobbies :<input type="checkbox" name="Hobbies1" ng-model="Check.sport1"> Cricket<br>
                 <input type="checkbox" name="Hobbies2" ng-model="Check.sport2"> Hockey<br>
                 <input type="checkbox" name="Hobbies3" ng-model="Check.sport3"> Athletics<br>
                 <button ng-model="button" ng-click="Alert();">click me</button>
        
        </div>
        </form>
    </body>
</html>
```
 
