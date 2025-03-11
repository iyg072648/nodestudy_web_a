function displayl(){
    console.log("A");
    setTimeout(() => {
       console.log("B");
       setTimeout(() => {
            console.log("C")
            setTimeout(() => {
               console.log("D")
               setTimeout(() => {
                    console.log("끝")
               }, 1000); 
            }, 1000);
       }, 1000); 
    }, 1000);
}

displayl();