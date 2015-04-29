(function() {
  'use strict';

  angular
    .module('tiendalylWeb')
    .constant('httpConfig', {
      baseUrl: 'https://tiendalyl-api-staging.herokuapp.com/api/v1/'
      //baseUrl: 'http://127.0.0.1:9292/api/v1/'
    });

})();
