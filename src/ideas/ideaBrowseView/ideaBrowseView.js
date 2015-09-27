angular.module('flintAndSteel')
.controller('IdeaBrowseViewCtrl',
    [
        '$scope', '$state', '$mdSidenav', 'ideaSvc', 'loginSvc',
        function($scope, $state, $mdSidenav, ideaSvc, loginSvc) {

            ideaSvc.getIdeaHeaders(function getIdeaHeadersSuccess(data) {
                $scope.topIdeas = data;
            }, function getIdeaHeadersError(data, status, headers, config) {
                console.log(status);
            });
        }   
    ]
);