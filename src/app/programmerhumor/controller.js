export const ProgHumorCtrl = ['$scope', 'ProgHumorService', class ProgHumorCtrl {
  constructor($scope, ProgHumorService) {
    this.title = "Programmer Humor";

  ProgHumorService.getPosts()
    .then( res => {
      if( res.status !== 200 ){
        $scope.error = `Error fetching /r/ProgrammerHumor.json\nStatus: ${res.status}`;
      }
      $scope.posts = res.data.data.children
        .filter( child => child.data.preview )
        .map( child => child.data );
    })
    .catch( err => console.error(err) );
    }
}];