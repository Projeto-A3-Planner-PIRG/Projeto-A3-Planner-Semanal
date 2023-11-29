require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(express.json()) // for parsing application/json
server.use('/api', routes);

server.listen(process.env.PORT,()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});

