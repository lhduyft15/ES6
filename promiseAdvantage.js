
let fs = require('fs');
fs.readFile('./a.txt' , 'utf8', (error, data) => {
    if(error) return console.log(error);
    console.log(data);
});

let promiseReadFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName , 'utf8', (error, data) => {
            if(error) return reject(error);
            resolve(data);
        });
    })
    
}
promiseReadFile('./b.txt')
.then(
    (mgs) => {
        console.log("Hello" , mgs);
    }
)
.catch((errorMgs) =>{
    console.log(errorMgs + "");
})

