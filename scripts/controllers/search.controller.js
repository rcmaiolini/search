define([
  'angular',
  'controllers/module'], function (ng) {

  'use strict';

  ng.module('app.controllers')
    .controller('SearchController', SearchController);

  SearchController.$inject = ['$filter','languages'];
  function SearchController($filter, languages){
    var vm = this;

    vm.searchInput = "";

    vm.searchData = languages;
  }
});