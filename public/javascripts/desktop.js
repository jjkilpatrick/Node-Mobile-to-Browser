var mobile = {

	init: function() {
		var self = this;

		// Global variables
		socket = io.connect();
		desktop = self.getURL();

		socket.emit('desktop connected', {
			room: desktop
		}, function(data) {
			console.log('desktop connected');
		});

		socket.on('trigger', function(data) {
			console.log('triggered');
			console.log(data);

			$('#wrapper').removeClass('in');
			

		});

	},

	getURL: function() {
		pathname = window.location.pathname;
		pathname = pathname.replace('/', '');

		return pathname;
	}

};

mobile.init();