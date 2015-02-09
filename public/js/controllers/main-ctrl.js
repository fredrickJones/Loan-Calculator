'use strict';
var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, bankService) {
	
	bankService.getIntRate().then(function(res) {
		$scope.interest_rate = res.data;
	});

	$scope.calculatePayment = function() {
		var totalOwed = Number($scope.principal) + (4 * (Number($scope.interest_rate) / 100) * Number($scope.principal));
		$scope.monthly_payment = $scope.totalOwed / 48;
	};
});
