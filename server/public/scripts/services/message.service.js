messageApp.service( 'MessageService', [ '$http', function( $http ) {
    console.log( 'MessageService has been loaded' );
    const self = this;

    self.messageArray = { list: [] };

    self.addMessage = function( object ) {
        return $http( {
            method: 'POST',
            url: '/message',
            data: self.newMessage
        }).then( function( response ) {
            console.log( 'Successfully added message' );
        }).catch( function( error ) {
            console.log( `Error occurred posting message: ${ error }` );
        })
    }

    self.getMessages = function( object ) {
        return $http({
            method: 'GET',
            url: '/message'
        }).then( function( response ) {
            console.log( `Successfully got ${ response.data }` );
            self.messageArray.list = response.data;            
        }).catch( function( error ) {
            console.log( `Error getting messages: ${ error }`);
        })
    }
}])