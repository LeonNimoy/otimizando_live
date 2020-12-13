require('dotenv').config();
require('./mongo');
const express = require('express');
const server = express();

server.listen(3000);