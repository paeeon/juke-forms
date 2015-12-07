app.controller('PlaylistCtrl', function($scope, PlaylistFactory){
  $scope.logNewPlaylist = function(playlistText) {
    console.log("new playlist: " + angular.toJson(playlistText));
  };

  $scope.createPlaylist = function(data) {
    return PlaylistFactory.create(data)
      .then(function(){
        $scope.newPlaylistForm.$setPristine();
        $scope.playlistText = {};
      });
  };

});