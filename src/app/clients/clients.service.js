'use strict';

var baseUrl = 'http://tiendalyl-admin.herokuapp.com/api/v1/';

angular
  .module('tiendalylWeb')
  .factory('clientsservice', clientsservice);

clientsservice.$inject = ['$resource'];

function clientsservice($resource) {
  var Client = $resource(baseUrl + 'clients/:id', null, {});

  return {
    getClients: getClients
  };

  function getClients() {
    return Client.query();
  }
}