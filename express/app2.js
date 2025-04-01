const express = require("express")
const app = express()
const port = 3000

// app.get('/', function (req, res) {
//     res.send('Hello world!');
// })

// app.post('/', function (req, res) {
//     res.send('Got a post request');
// })

// app.delete('/', function (req, res) {
//     res.send('Got a delete request');
// })

//라우트 핸들러에서 여러 개의 콜백 함수 사용
//주의할 점은 next 오브젝트를 반드시 지정.
let respond;
app.get('/example/a', function(req, res, next){
    respond = 'the response will be sent by the next function...';
    // next();
    // res.send("end"); // 먼저 보낼경우 콜백함수가 실행되지 않음
}, function(req, res){
    res.send(respond + '\nHello from a!')
})


//같은 book이지만 route를 사용하여 get,post,put을 간단하게 나눌수있음
app.route('/book')
    .get(function(req, res) {
        res.send("get a random book")
    })
    .post(function(req, res){
        res.send("add a book")
    })
    .put(function(req, res){
        res.send("update the book")
    });

/*
post 요청에 포함딘 body를 쉽게 얻고자 할 때
express.json을 사용

strict: false시 json.parse메서드가 할 수 있는 것이면
accept하고 true일때는 array나 object만 accept한다.
*/
const jsonParser = express.json({strict: false});

app.use(jsonParser);
app.get('/', function (req, res) {
    res.json(`user is ${req.body}.`);
})

app.listen(port, () => {
    console.log(`${port}번 실행중`)
})