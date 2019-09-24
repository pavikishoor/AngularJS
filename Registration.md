#Registration.jsp
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
        <input type="text" name="fullName" ng-model="fullName"> 
        
        <ul>
            <li ng-repeat="dept in collegs"> {{dept.deptname}} </li> 
            
        </ul>
        </div>
        </form>
    </body>
</html>
```
