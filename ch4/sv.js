const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.method);

    res.setHeader("Content-Type", "text/plain"); //응답 헤더
    res.write("hello node") //본문
    res.end() // 종료
})

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행중")
})