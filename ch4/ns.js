const fs = require("fs")
let files = fs.readdir("./", (err,files)=>{
    if(err){
        console.log(err);
    }
    console.log(files)
});
console.log("코드 끝")

// let files = fs.readdirSync("./");
// console.log(files)
// console.log("코드 끝")