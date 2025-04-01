const fs = require("fs").promises

async function readDirAsync() {
    try{
        const files = await fs.readdir("./");
        console.log(files)
    } catch{
        console.log(err)
    }
}

readDirAsync();