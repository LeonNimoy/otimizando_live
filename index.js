require('dotenv').config();
require('./mongo');
require('./redis');
const express = require('express');
const server = express();
const routes = require('./routes');

server.use(express.json());
server.use(routes);

server.listen(3000);