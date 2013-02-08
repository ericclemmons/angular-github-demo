angular
  .module('app.controllers.demo', [
    'app.services.repo',
    'app.services.issue'
  ])
  .controller('DemoController', [
    '$scope',
    'RepoService',
    'IssueService',
    function($scope, RepoService, IssueService) {
      $scope.loadRepos = function() {
        $scope.repos = RepoService.query({ username: $scope.username });
      };

      $scope.selectRepo = function(repo) {
        $scope.repo = repo;
      };

      $scope.$watch('repo', function(repo) {
        if (repo) {
          $scope.issues = IssueService.query({ username: $scope.username, repo: repo.name });
        }
      });
    }
  ])
;

