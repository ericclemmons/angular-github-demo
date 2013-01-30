angular

  // Registed via `ng-app`
  .module('app', [
    'ngResource'
  ])

  // Create a `RepoService` for use within controllers`
  .factory('RepoService', function($resource) {
    return $resource('https://api.github.com/users/:username/repos', {}, {
      query: {
        method: 'JSONP',
        params: { callback: 'JSON_CALLBACK' }
      }
    });
  })

  // Registered via `ng-controller`
  .controller('DemoController', function($scope, RepoService) {
    $scope.username = 'ericclemmons';

    $scope.loadRepos = function() {
      $scope.repos = RepoService.query({ username: $scope.username });
    };
  })
;

