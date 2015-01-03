'use strict';

/* Services */

warnabrodaApp.factory('DashboardService', ['$q', '$http',
   function ($q, $http) {
	return {		        
        countAllWarnings : function(){
            var deferred = $q.defer();
            $http.get('warnabroda/hq/count-warnings').success(function(data) {
                deferred.resolve(data);
            }).error(function(data, status, headers, config) {
                deferred.reject(status);
            });
            return deferred.promise;
        },
        getAll : function(filter){
            var deferred = $q.defer();
            $http.get('warnabroda/hq/list-warnings', filter).success(function(data) {
                deferred.resolve(data);
            }).error(function(data, status, headers, config) {
                deferred.reject(status);
            });
            return deferred.promise;
        },
	};
}]);