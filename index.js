const express = require('express')
const axios = require('axios');
const stringify = require('json-stringify-safe')
const app = express()
const port = 3000
require('./dbconnection');
const ResponseData = require('./models/responseData');
app.get('/', async (req, res) => {
    try{
        let response = {};
        response = await axios.get('https://openweathermap.org/api');
        response = JSON.parse(stringify(response));
        const responsedata = new ResponseData({
            data: response['data']
        });
        responsedata.save();
        var today = new Date();
        var n = today.getDate(), i, flag = true;
        n = parseInt(n) 
        for(i = 2; i <= n - 1; i++) 
            if (n % i == 0) { 
                flag = false; 
                break; 
            }
        if (flag == true){ 
            //It is prime
            res.status(202).send({
                status : "success",
                response: response['headers']
            });
        }else{
            //It is not a prime
            res.status(202).send({
                status : "success",
                response: response
            });
        } 
    }catch(error){
        console.log(error);
        res.status(202).send({
            status : "error",
            error: error
        });
    }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})