define(['angular',
  'controllers/module'], function (ng, controllers) {
  'use strict';
  ng.module('app.controllers')
    .controller('FooterController', FooterController);

  FooterController.$inject = [];
  function FooterController(){
    var vm = this;
  }
});
