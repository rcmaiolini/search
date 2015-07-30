define([
  'angular',
  'controllers/module'], function (ng) {

  'use strict';

  ng.module('app.controllers')
    .controller('SearchController', SearchController);

  SearchController.$inject = [];
  function SearchController(){
    var vm = this;
  }
});
