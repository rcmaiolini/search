define([
  'angular',
  'filters/module'], function (ng) {

  'use strict';

  ng.module('app.filters')
    .filter('advancedSearch', function () {
      return function (searchArray, searchCriteria) {
        var resultArray = [];

        var arrayCriteria = searchCriteria.split(" ");
        var regexSearch   = "";

        angular.forEach(arrayCriteria, function (value, index) {
          if ((new RegExp('^(-).*', "gi")).test(value) && value.length > 1) {
            regexSearch += "(?!.*" + RegExpEscape(value.substr(1)) + ")";
          } else {
            regexSearch += "(?=.*" + RegExpEscape(value) + ")";
          }

        });

        var theRegexp = new RegExp('^' + regexSearch + '.*', "gi");

        //angular.copy removes all unwanted angular generated
        //keys on the objects from the array
        angular.forEach(angular.copy(searchArray), function (row, index) {
          var rowDataArray = [];
          angular.forEach(row, function (rowData, rowKey) {
            this.push(row[rowKey]);
          }, rowDataArray);

          if (theRegexp.test(rowDataArray.join(' ')))
            resultArray.push(searchArray[index]);
        });

        return resultArray;
      }

      function RegExpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      };
    });
});