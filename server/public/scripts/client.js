const messageApp = angular.module( 'messageApp', [ 'ngRoute' ] );

messageApp.config( function( $routeProvider ) {
    console.log( 'Route config loaded' );
    $routeProvider.when( '/', {
        redirectTo: '/message'
    })
    .when( '/message', {
        templateUrl: '/views/message.html',
        controller: 'MessageController as MC'
    })
})