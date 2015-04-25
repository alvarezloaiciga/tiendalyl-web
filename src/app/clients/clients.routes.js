(function() {
  'use strict';

  angular
    .module('tiendalylWeb.clients')
    .config(config);

  function config ($stateProvider) {
    $stateProvider
      .state('clients', {
        url: '/clients',
        templateUrl: 'app/clients/clients.html',
        controller: 'ClientsController',
        controllerAs: 'clients',
        
      })
      .state('clients.detail', {
        url: '/:id',
        views : {
          '@': {
            templateUrl: 'app/clients/clients.detail.html',
          },
        }
      });
  }
})();

