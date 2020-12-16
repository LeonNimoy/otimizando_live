require('dotenv').config();
require('./mongo');
require('./redis');
const express = require('express');
const server = express();
const routes = require('./routes');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length


server.use(express.json());
server.use(routes);
 
if(cluster.isMaster) {
    for(let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
} else {

    server.listen(3000);
}
