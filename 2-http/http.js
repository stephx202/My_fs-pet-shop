let http = require('http');
let port = process.env.PORT || 8000;

let fs = require('fs');


//create the server
let server = http.createServer(function(req, res){
    
    //if the request method GET && request url /pets
    if(req.method === 'GET' && req.url === '/pets'){
        fs.readFile("../pets.json", "utf-8", function (error, data) {
            if(error){
                res.statusCode = 500;
                res.end()
                //callback(error)---?
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json' );
            console.log('someth')
            res.end(data);
        })
    
        
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found');
    }
    
})
//this just shows that it started the server
server.listen(port, function() {
  console.log('Listening on port', port);
});


