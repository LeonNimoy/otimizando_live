const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    dbName:'sample_training',
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(() => {
    console.log('mongo connected');
}).catch(console.error);