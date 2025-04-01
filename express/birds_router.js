const express = require('express');

//express.Router 클래스를 사용하여 라우팅 분리
//코드를 가독성있게 작성가능
const router = express.Router();

router.use(function timeLog(req, res, next) { //middleware
    console.log('Time: ', Date.now());
    next();
})

//birds home page
router.get('/', function (req, res) {
    res.send('birds home page');
})

//birds about
router.get('/about', function (req, res) {
    res.send('about birds');
})

module.exports = router;