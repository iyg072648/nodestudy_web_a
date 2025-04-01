const fs = require("fs");

// fs.unlinkSync("./text-1.txt")
// console.log("파일 삭제됨")

//2
// if(!fs.existsSync("./text-1.txt")){
//     console.log("파일 없음")
// } else{
//     fs.unlinkSync("./text-1.txt")
//     console.log("파일 삭제")
// }

//3
if(!fs.existsSync("./text-2/txt")){
    console.log("없음")
}else{
    fs.unlink("./text-2.txt",()=>{
        console.log("삭제")
    })
}