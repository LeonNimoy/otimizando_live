const Router = require('express').Router;
const routes = new Router();
const gradesSchema = require('./schema');

routes.get('/grades', async (req, res) =>{
    const grades = gradesSchema.find().limit(100);
});

module.exports = routes;