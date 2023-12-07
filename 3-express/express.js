// set up the server/dependencies
const express = require('express');
const app = express();
const fs = require('fs');
// import express from 'express';
// import fs from 'fs';
// const app = express();
fs.readFile('../pets.json', 'utf-8', (error, data)  => {
    if(error){
        console.error("error, cant read pet data")
        return;
    }
    const dataparsed = JSON.parse(data);

    app.use(function(req, res, next) { // this is like the if portion, if it's all good, it'll go down to the next function
        console.log('request method ', req.method);
        console.log('request path ', req.url);
        next();
    });
    
    // set up the routes (endpoints)
    app.get('/pets', function (req, res) { // this is handling an if statement for method and url, somehow...
        res.send( dataparsed);
        console.log("it works")
    });

    app.get('/pets/0', function (req, res) { // this is handling an if statement for method and url, somehow...
        res.send(dataparsed[0] /* some path?? here */);
        console.log("we reached to pets/0")
    });
    app.get('/pets/:num', function (req, res, next) { // this is handling an if statement for method and url, somehow...
        const { num } = req.params // whatever is after the key in ???
        //console.log(req.params);
        if (!Number(num) || num > dataparsed.length - 1) {
            next({ status: 404, message: 'Not Found' })
        }
        res.send(dataparsed[num] /* some path?? here */);
        console.log("we reached to pets at a given index")
    });
    
    app.use(function(err, req,res,next) {
        console.log('hit the bottom middleware');
       res.status(err.status).json({ error: err })
       
    });
  
});

// start the server listening
app.listen(8000, function() {
    console.log('server listening on port 8000');
});
