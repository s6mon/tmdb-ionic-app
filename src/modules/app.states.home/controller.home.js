/**
 * @memberOf app.states.home
 */
(function (module) {
  'use strict';

  function HomeController($scope, stateService) {
    var controller = this;

    $scope.search = { query: '', results: []};

    controller.search = function() {
      stateService.search('Moi').then(function (results) {
        $scope.results = results;
    });
  };
    }


  module.controller('homeController', [
    '$scope',
    'stateService',
    HomeController
  ]);

}(angular.module('app.states.home')));
