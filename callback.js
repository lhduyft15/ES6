

let trapezium = (a, b, h) => (a + b)*h/2;

let add = (a,b, cb) =>{
    setTimeout(() =>{
        if(typeof a != 'number' || typeof b != 'number'){
            return cb(new Error('Vui long nhap so'));
        }
        cb(undefined, a + b);
    },1000)
}

let multifi = (a ,b , cb) =>{
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number'){
            return cb(new Error('Vui long nhap so'));
        }
        cb(undefined, a * b);
    },1000);
}
add(4 ,10 , (e, res) => {
    if(e) return console.log(e + ''); //Them '' tuong duong voi toString()
    multifi(res , 10, (e , res) =>{
        if(e) return console.log(e + '');
        return console.log(res);
    })
})