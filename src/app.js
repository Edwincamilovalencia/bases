require('./database/sync');

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const departmentrouter =require('./routers/departmentrouter');
const restaurantRouter = require('./routers/restaurantRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port,()=>{
    console.log('the aplication is running on port'+ port)
});

app.use('/api',departmentrouter);
app.use('/api',restaurantRouter);
