const fs = require("fs");

//1 리더블 스트림으로 파일을 조금씩 가져옴
// const readStream = fs.createReadStream("./readMe.txt");

// readStream.on("data", (chunk) => {
//     console.log("새로운 청크 : ")
//     console.log(chunk)
// });

// readStream.on("end",()=>{
//     console.log("파일 읽기")
// });

// readStream.on("error", (err) =>{
//     console.log(`err : ${err}`)
// })

//2 청크단위로 불러와서 기록
// const readStream = fs.createReadStream("./readMe.txt", "utf8")
// const writeStrem = fs.createWriteStream("./writeMe.txt")

// readStream.on("data", (chunk)=>{
//     console.log("new chunk received:");
//     writeStrem.write(chunk)
// })