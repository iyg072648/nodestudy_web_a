/*
request = 미들웨어 함수에 대한 http에 대한 요청 인수.
response = 미들웨어 함수에 대한 http에 대한 응답 인수.

next = 미들웨어 함수에 대한 콜백 인수
미들웨어에 응답을 보내는것이 아니라면
호출하여 다음 미들웨어 함수를 실행할 수 있도록 해야함
 */

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next(); //선언 안하면 호출 안됨
}

//모든 요청에 대한 실행할 미들웨어 함수는 app.use 사용
app.use(myLogger);

app.get('/', function (req, res) {
    res.send('hello world!');
})

/*
만약 함수 myLogger의 로드를 바꾼다면
핸들러에서 이미 res.send()로 response로 보낸 다음
로드가 되었기 때문에 실행안됨
함수 로드의 순서 또한 신경써야한다.
 */