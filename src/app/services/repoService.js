angular
  .module('app.services.repo', [
    'ngResource'
  ])
  .factory('RepoService', [
    '$resource',
    function($resource) {
      return $resource('https://api.github.com/users/:username/repos', {}, {
        query: {
          method: 'JSONP',
          params: { callback: 'JSON_CALLBACK' }
        }
      });
    }
  ])
;
