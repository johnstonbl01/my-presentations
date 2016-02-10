angular
   .module('myApp', [])
   .factory('myFactory', myFactory)
   .controller('myController', myController)
   .directive('myDirective', myDirective);

   myController.$inject = ['$scope', 'myFactory'];

   function myFactory () {
      var getData = function () {
         return 'NWA Developers Group';
      };

      return {
         getData: getData
      };
   }

   function myController ($scope, myFactory) {
      $scope.world = myFactory.getData();
   }

   function myDirective () {
      var ddo = {
         restrict: 'A',
         link: linkFunction
      };

      return ddo;

      function linkFunction (scope, element, attrs) {
         element.on('mouseenter', function () {
            this.css({
               'background-color': 'green',
               'color': 'white'
            });
         }.bind(element));

         element.on('mouseleave', function () {
            this.removeAttr('style');
         }.bind(element));
      }
   }