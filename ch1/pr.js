let lp = true;
const pz = new Promise((resolve, reject) => {
    if(lp)
        resolve('피자 주문')
    else
        reject('주문 하지 않음')
});

pz
.then(result => console.log(result))
.catch(err => console.log(err));