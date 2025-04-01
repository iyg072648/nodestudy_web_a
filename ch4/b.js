// const fs = require("fs")

// const data = fs.readFileSync("ex1.txt");
// console.log(data);
// console.log("코드 끝")

const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/home"){
        res.end("HOME")
    } else if (req.url === "/about"){
        res.end("About");
    } else{
        res.end("NOT FOUND")
    }
})

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행중")
})