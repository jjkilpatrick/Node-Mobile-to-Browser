var mobile = {

	init : function() {
		var self = this;

		// Global variables
		socket = io.connect(); 
		mobile = self.getURL();

		// Device support
		console.log("device.portrait() === %s", device.portrait());
      	console.log("device.landscape() === %s", device.landscape());
      	console.log("device.mobile() === %s", device.mobile());

      	// If device is mobile
      	if (device.mobile()) {
      		// Emit connected
      		socket.emit('mobile connected', { room: mobile }, function(data){
				console.log('mobile connected');
			});

      	}

      	// On button click emit
		$('#trigger').click(function(event) {
			self.emitClick();
		});

	},

	// Check url var
	getURL : function() {
		pathname = window.location.pathname;
		pathname = pathname.replace('/', '');

		return pathname;
	},

	// Emit on click
	emitClick : function() {
		socket.emit('mobile clicked', { msg : 'Mobile click detected' });
	}

};

mobile.init();