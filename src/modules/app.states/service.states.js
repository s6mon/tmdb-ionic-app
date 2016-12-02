/**
 * @memberOf app.states
 */
(function (module) {
  'use strict';

  function StatesService(httpService, i18nService, $q) {
    var service = this;


    service.search = function (query) {
      console.log(query);
      return $q.resolve([
        { title: 'moi' },
        { title: 'moi2' }])
    };


    service.getMovie = function (id){
      return $q.resolve({ title: "'Moi", id: id });
    }
    /**
     * Resolve states data.
     * @return {Promise} Passing an object.
     */
    service.resolveStatesData = function () {
      return httpService.all({
        // Force loading of dynamic locale using the determined one.
        locale: i18nService.setLocale()
      });
    };
  }

  module.service('statesService', [
    'httpService',
    'i18nService',
    '$q',
    StatesService

  ]);

}(angular.module('app.states')));
