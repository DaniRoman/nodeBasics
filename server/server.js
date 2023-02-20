const express = require('express')
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config.js');

require("dotenv").config()

class Server{
     
    constructor(){

        this.app = express();
        this.port = process.env.port;
        this.path = {
            uploads : '/api/fileupload'
        };
        

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
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));
    }

    routes(){
       this.app.use( this.path.uploads, require('../routes/fileRoutes'));
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Running on localhost', this.port)
        })
    }
}



module.exports = Server;