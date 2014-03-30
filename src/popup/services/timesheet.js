angular.module('OtlPlus-services', [])
  .factory('Timesheet', ['$q', function($q) {
    var CACHE_KEY = 'otl-timesheet-cached'
    var _blank = [{project: null, task: null}];

    function inProgress() {
      var deferred = $q.defer();
      chrome.storage.local.get(CACHE_KEY, function(data) {
        deferred.resolve(data[CACHE_KEY] || _blank);
      });
      return deferred.promise;
    }

    function cache(timesheet) {

    }

    return {
      inProgress: inProgress,
      cache: cache
    };
  }]);
