import os from "os";
import add from "./math.js";
console.log(os.platform());
console.log(add(2, 3));
import http from "http";
const server =http.createServer((req,res)=>{
    res.write("hello user");
    res.write("rohan");
    res.end();
})
server.listen(3000);