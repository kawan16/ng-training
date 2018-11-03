'use strict';


let data = require( './data' );
const Hapi = require('hapi');
const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with']
    }
  }
});


server.route({
  method: 'GET',
  path: '/series',
  handler: (request, h) => {
    return data;
  }
});

server.route({
  method: 'POST',
  path: '/series',
  handler: (request, h) => {
    const newSerie = { ...request.payload, id: data.length + 1 };
    data.push( newSerie );
    return newSerie;
  }
});

const init = async () => {

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();




