angular.module('usersModule')

    .controller('usersDetailsController', function($scope, $state, user, usersRestService) {

        var _backToList = function() { $state.go('^.list'); };

        $scope.user = user;
        $scope.isEditing = user && user.id;

        $scope.createOrUpdate = function() {
            usersRestService[$scope.isEditing ? 'update' : 'create'](user)
                .then(_backToList);
        };

        $scope.delete = function() {
            usersRestService.delete(user)
                .then(_backToList);
        };

    });