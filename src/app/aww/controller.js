export const AwwCtrl = ['$scope','AwwService', class AwwCtrl {
  constructor($scope, AwwService) {
    this.title = "Aww";

  AwwService.getPosts()
    .then( res => {
      if( res.status !== 200 ){
        $scope.error = `Error fetching /r/aww.json\nStatus: ${res.status}`;
      }
      $scope.posts = res.data.data.children
        .filter( child => child.data.preview )
        .map( child => child.data );
    })
    .catch( err => console.error(err) );
    }
}];