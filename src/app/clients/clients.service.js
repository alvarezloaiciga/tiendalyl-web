(function() {
  'use strict';

  var baseUrl = 'http://tiendalyl-admin.herokuapp.com/api/v1/';

  angular
    .module('tiendalylWeb.clients')
    .factory('clientsservice', clientsservice);

  clientsservice.$inject = ['$resource'];

  function clientsservice($resource) {
    var Client = $resource(baseUrl + 'clients/:id', null, {});

    return {
      getClients: getClients,
      getClient: getClient,
    };

    function getClients() {
      return Client.query();
    }

    function getClient(clientId) {
      return Client.get({ id: clientId });
    }
  }
})();
