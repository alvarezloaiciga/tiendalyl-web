'use strict';

angular
  .module('tiendalylWeb')
  .controller('NavbarController', NavbarController);

function NavbarController($scope) {
  $scope.date = new Date();
}
