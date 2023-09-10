//ב"ה
import express  from 'express';
import database from './utilis/database.js'

import order  from './routes/order.js';
import account from './routes/account.js';
import products from './routes/products.js';

const app = express();

app.use(express.urlencoded());
app.use(express.json())

const port = 3005;

app.use('/api/account', account);
app.use('/api/products',products);
app.use('/api/order',order);

database
.sync()
.then(results => {
    //console.log(results);
    app.listen(port, ()=>{
        console.log(`server is runnig on port ${port}`)
    })
})
.catch(error => {
    console.log(error);
})

