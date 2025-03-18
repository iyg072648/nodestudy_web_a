const fs = require("fs")

//파일 리스트
// let files = fs.readdirSync("./");
// console.log(files);

fs.readdir("./", (err, files) =>{
    if(err){
        console.error(err);
    }
    console.log(files)
});