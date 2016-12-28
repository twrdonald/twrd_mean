var app = angular.module('flapperNews', []);

// new 28th Dec
app.factory('posts', [function(){
  // service body
  var o = {
    posts: []
  };
  return o;
}])
//
app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
  
  $scope.posts = [
  {title: 'post 1', upvotes: 5},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}
];

// add post
  $scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
     upvotes: 4
   });
  $scope.title = '';
  $scope.link = '';
};  


//increment upvotes
  $scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};
}]);