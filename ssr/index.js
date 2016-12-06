'use strict';

const Hapi = require('hapi');
const ssr = require('./app-frontend-server.js');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

function render(payload) {
	const str = ssr.renderPostList(payload);
	console.log(payload);
	return str;
}

server.route({
    method: 'POST',
    path: '/render',
    handler: function (request, reply) {
        reply(render(request.payload));
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
