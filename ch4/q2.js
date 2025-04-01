const arr = [10, 20, 30, 40, 50];


for(let i = 0; i < arr.length; i++){
    (function(x){
      setTimeout(function(){
        console.log(arr[i])
      }, 1000*x);
    })(i);
  }