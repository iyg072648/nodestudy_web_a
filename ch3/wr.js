const fs = require("fs");

//파일 기록(붙여넣기)
// const data = fs.readFileSync("./ex.txt", "utf8")
// fs.writeFileSync("./text-1.txt", data)

//파일 존재 여부 체크
// const data = fs.readFileSync("./ex.txt", "utf8")
// if(fs.existsSync("text-1.txt")){
//     console.log("fill already exist");
// } else{
//     fs.writeFileSync("text-1.txt",data)
// }

//비동기처리
fs.readFile("./ex.txt", "utf8", (err, data) => {
    if(err){
        console.log(err)
    }
    fs.writeFile("./text-2.txt", data, (err) => {
        if(err){
            console.log(err);
        }
        console.log("text-2.txt is saved!");
    })
})