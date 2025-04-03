const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', function(req, res, next) {
  res.send('signup');
});

//사용자 정보를 저장할 데이터베이스
const db = new Map();

//KEY = VALUE 형태로 브라우저에 저장되는 쿠키의 KEY
const USER_COOKIE_KEY = "USER";

//미들웨어 선언
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.post('/signup', (req, res) => {
    const { username, name, password } = req.body;
    const exists = db.get(username);

    //이미 존재하는 username인 경우 회원가입 실패
    if(exists){
        res.status(400).send(`dup username : ${username}`)
        return;
    }

    //아직 가입되지 않은 username인 경우 db에 저장
    //KEY = username, VALUE = { name, password }
    const newUser = {
        username,
        name,
        password,
    };
    db.set(username, newUser);
    
    //db에 저장된 user 객체를 문자열 형태로 변환하여 쿠키에 저장
    res.cookie(USER_COOKIE_KEY, JSON.stringify(newUser));
    //가입 완료 후 루트 페이지 이동
    res.redirect('/');
})


app.get('/',(req, res) => {
  
    const user = req.cookies[USER_COOKIE_KEY];
    if(user){
      
      const userData = JSON.parse(user);
      if(db.get(userData.username)){
        res.status(200).send(`
            <a href="/logout">Log Out</a>
            <h1>id: ${userData.username}, name: ${userData.name}, password: ${userData.password}</h1>
        `);
        return;
      }
    }
  
    // 쿠키가 존재하지 않는 경우, 로그인 되지 않은 것으로 간주
    res.status(200).send(`
        <a href="/login.html">Log In</a>
        <a href="/signup.html">Sign Up</a>
        <h1>Not Logged In</h1>
    `);
  })
module.exports = router;
