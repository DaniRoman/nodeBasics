const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config.js');


require("dotenv").config()

class Server{
     
    constructor(){

        this.app = express();
        this.port = process.env.port;
        this.usersPath = '/api/users';
        

        this.databaseConection();
        this.middlewares();
        this.routes();
     
    }

    async databaseConection(){
           await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use( express.json());
        this.app.use(express.static('public'));
    }

    routes(){
       this.app.use( this.usersPath, require('../routes/userRoutes'));
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Running on localhost', this.port)
        })
    }
}



module.exports = Server;