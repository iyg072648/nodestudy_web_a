const fs = require("fs");

// if(fs.existsSync("./test")){
//     console.log("이미 있음")
// }else{
//     fs.mkdir("./test",(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("폴더 생성")
//     })
// }

//2
// if(fs.existsSync("./test2/test3/test4")){
//     console.log("폴더 있음")
// }else{
//     fs.mkdir("./test2/test3/test4", {recursive:true}, (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("폴더 생성")
//     })
// }

//3
// if(fs.existsSync("./test")){
//     fs.rmdir("./test",(err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log("폴더 삭제")
//         }
//     });
// }else{
//     console.log("삭제할 폴더 없음")
// }

//4
fs.rm("./test2", {recursive:true}, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("폴더 삭제")
    }
})