

let aPro = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        //resolve("Thanh cong");
        reject("That bai");
    }, 1000);
})

//then co 2 tham so
//tham so 1 thanh cong
//tham so 2 that bai
aPro.then(
    (mgs) => {
        console.log("Excute", mgs);
    },
    (errorMgs) => {
        console.log(errorMgs + '');
    }
);