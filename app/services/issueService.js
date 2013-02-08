angular
  .module('app.services.issue', [
    'ngResource'
  ])
  .factory('IssueService', [
    '$resource',
    function($resource) {
      return $resource('https://api.github.com/repos/:username/:repo/issues', {
        state: 'open'
      }, {
        query: {
          method: 'JSONP',
          params: { callback: 'JSON_CALLBACK' }
        }
      });
    }
  ])
;
