const {user1, user2} = require("./user2")
const hello = require("./hello")

// exports.hello = (name) => {
//     console.log(`${name}님 안녕하세요.`)
// }

hello(user1);
hello(user2);