const http= require("http");

const server = http.createServer((req,res)=>{
    res.write("hello preshit");
    res.end("end");

});

server.listen(4500,'127.0.0.1');