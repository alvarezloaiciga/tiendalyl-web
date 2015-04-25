(function() {
  'use strict';

  angular
    .module('tiendalylWeb')
    .config(config);

  function config ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
})();

