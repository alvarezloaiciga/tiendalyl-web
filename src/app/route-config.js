'use strict';

angular
  .module('tiendalylWeb')
  .config(config);

function config ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController'
    })
    .state('clients', {
      url: '/clients',
      templateUrl: 'app/clients/clients.html',
      controller: 'ClientsController',
      controllerAs: 'clients'
    })
    .state('clients.detail', {
      url: '/:id',
      templateUrl: 'app/clients/client.html',
      controller: 'ClientController',
      controllerAs: 'client'
    });

  $urlRouterProvider.otherwise('/');
}
