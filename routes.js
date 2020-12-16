const Router = require('express').Router;
const routes = new Router();
const gradesSchema = require('./schema');
const cache = require('./redis');

routes.get('/grades', async (req, res) =>{
    const grades = await gradesSchema.find().limit(100);
    res.json({data:grades})
});

routes.get('/grades/:id', async (req, res) =>{
    const {id} = req.params;
    const exists = await cache.get(`grades:${id}`);
    if(exists) {
        res.json({data: JSON.parse(exists)})
    }
    const grades = await gradesSchema.findOne({_id: id});
    cache.set(`grades:${id}`, JSON.stringify(grades))
    res.json({data:grades})
});

module.exports = routes;