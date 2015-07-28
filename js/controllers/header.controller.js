define(['angular',
  'controllers/module'], function (ng, controllers) {
  'use strict';
  ng.module('app.controllers')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = [];
  function HeaderController(){
    var vm = this;
  }
});
