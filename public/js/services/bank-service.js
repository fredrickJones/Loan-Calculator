'use strict';
var app = angular.module('LoanCalculator');

app.service('bankService', function($http) {
	this.getIntRate = function() {
		return $http.get('/api/interest_rate');
	};
});