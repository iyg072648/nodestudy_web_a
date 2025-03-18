const path = require("path");

//파일이름름
const fn = path.basename(__filename);
const fn2 = path.basename(__filename, 'js');
console.log(`파일 이름 : ${fn}`)
console.log(`파일 이름(확장자 제외) : ${fn2}`)

// 파일 확장자
const ext = path.extname(__filename);
console.log(`파일 확장자 : ${ext}`)
console.log(path.basename(__filename, ext));

//경로 객체
const parsedPath = path.parse(__filename)
console.log(parsedPath)

// console.log(`파일 절대 경로 : ${__filename}`);
// const dir = path.dirname(__dirname);
// console.log(`경로만 : ${dir}`)


// const fullPath = path.join('some','work', 'ex.txt');
// console.log(fullPath);