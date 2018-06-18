messageApp.controller( 'MessageController', function( MessageService ) {
    const self = this;

    self.addMessage = function() {
        console.log( 'In addMessage of controller' );
        self.newMessage = {
            name: self.name,
            message: self.message
        }
        MessageService.newMessage = self.newMessage;
        MessageService.addMessage().then( function( response ) {
            self.getMessages();
        })
    }

    self.getMessages = function() {
        console.log( 'In getMessages of controller' );
        MessageService.getMessages().then( function( response ) {
            self.messages = MessageService.messageArray.list;
        })
    }

    self.getMessages();
})