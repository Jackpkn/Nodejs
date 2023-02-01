import express from 'express'
require('dotenv').config();
import core from 'cors';
import morgan from 'morgan';
import database from './models/schema';
    
const port = process.env.PORT;
    
const app = express();
//? middleware
app.use(morgan('dev'));
app.use(cors());


app.get('/', (req, res) => {
    res.send('this is homepage')
})
 

app.listen(port, () => {
    console.log('successfully connected');
})