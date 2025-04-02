// import 'http' module
const http = require('http');

// create server with http method
const server = http.createServer((request, response) => {
    // set the status code
   response.statusCode = 200 ; 

//    set header
response.setHeader("content-type", "text/plain");


response.end("Hello world \n");
});

const port = 3000;

server.listen(port, () =>{
    console.log(`server is running: ${port}`);
})

