﻿'use strict';

var backAndControllers = angular.module('backAnd.controllers');
backAndControllers.controller('dynamicGridController', ['$scope', 
    function ($scope) {

        $scope.viewName = 'Employees';
        //$scope.inputStyle = { 'height': 550 };
        $scope.buttonGroups = [{ buttons: [{ text: "New", iconClass: "glyphicon-plus", callback: $scope.buttonClick }, { text: "Edit", iconClass: "glyphicon-pencil", callback: $scope.buttonClick }, { text: "Delete", iconClass: "glyphicon-trash", callback: $scope.buttonClick }] }];

        $scope.buttonClick = function () {
            alert(1);
        }
    }
])

backAndControllers.controller('filterController', ['$scope', 'dataListService',
    function ($scope, dataListService) {

        $scope.viewName = 'Employees';
        $scope.inputStyle = { 'height': 300 };
        $scope.buttonGroups = [{ buttons: [{ text: "New", iconClass: "glyphicon-plus", callback: function () { alert("New") } }, { text: "Edit", iconClass: "glyphicon-pencil", callback: function () { alert("Edit") } }, { text: "Delete", iconClass: "glyphicon-trash", callback: function () { alert("Delete") } }] }];

        $scope.filterOptions = [{ fieldName: 'First_Name', operator: 'contains', value: '' }, { fieldName: 'Job_Title', operator: 'in', value: '' }];

        $scope.loadSelectOptions = function () {
            dataListService.read({
                dataType: "view",
                viewName: "EmployeesJob_Title",
                withSelectOptions: null,
                filter: null,
                sort: JSON.stringify([{fieldName:"Ordinal", order: "asc"}]),
                search: null
            }, function (data) {
                
                $scope.Job_TitleOptions = data.data;
            });
        }

        $scope.loadSelectOptions();
    }
])
