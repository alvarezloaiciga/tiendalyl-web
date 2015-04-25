(function() {
  'use strict';

  angular
    .module('tiendalylWeb.home')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      });
  }
})();

