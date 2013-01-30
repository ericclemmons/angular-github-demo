angular
  .module('app', [
    'app.controllers.demo'
  ])
  .config(['$routeProvider', function($router) {
    $router
      .when('/', {
        controller:   'DemoController',
        templateUrl:  'app/partials/demo.html'
      })
    ;
  }])
;

