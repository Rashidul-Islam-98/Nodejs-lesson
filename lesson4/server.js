const http=require('http');
const fs=require('fs');

const port=3000;
const hostName='127.0.0.1';

const server=http.createServer((req,res)=>{
    const callReadFile=(address,status)=>{
        fs.readFile(address,(err,data)=>{
            res.writeHead(status,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        });
    };
    if(req.url==="/"){
        callReadFile("index.html",200);
    }else if(req.url==="/about"){
        callReadFile("about.html",200);
    }else if(req.url==="/contact"){
        callReadFile("contact.html",200);
    }else{
        callReadFile("error.html",404);
    }
});

server.listen(port,hostName,()=>{
    console.log(`server is running at http://${hostName}:${port}`);
});