let remaininTime =10000;
let waitingInterval = 1000;

const timer = setInterval(() => {
    console.log((`${remaininTime/1000}초 남음`))
    remaininTime -= waitingInterval

    if(remaininTime <= 0) {
        console.log("안녕하세요");
        clearInterval(timer);
    }
}, waitingInterval);