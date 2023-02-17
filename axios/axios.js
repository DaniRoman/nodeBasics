const https = require("https");
const fs = require('node:fs')
require("dotenv").config()

const axios = require('axios');

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
  cert: fs.readFileSync("Zscaler_Root_CA_pem.pem"),
});


const axiosResponse = async ()=>{
    try{
        
        const resp = await axios.get('https://dog.ceo/api/breeds/image/random',{ httpsAgent })
        console.log(resp.data.message)
        
    } catch(err){
        throw err
    }
}

const main = async()=>{
    axiosResponse()
    console.log(process.env.PRUEBA)
}


main();

