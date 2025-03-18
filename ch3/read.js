const fs = require("fs");

//파일 읽기
const data = fs.readFileSync("./ex.txt", "utf8")
console.log(data)

//에러
fs.readFile("./ex.txt", "utf8", (err, data) =>{
    if(err){
        console.log(err);
    }
    console.log(data)
})