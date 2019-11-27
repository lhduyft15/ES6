let add = (a,b) => {
    return new Promise(
        (res, rej) => {
            if( typeof a != 'number' || typeof b != 'number'){
                let mgs = '';
                if(typeof a != 'number' && typeof b != 'number'){
                    mgs = 'a and b';
                } else if(typeof a != 'number'){
                    mgs = 'a';
                } else if(typeof b != 'number'){
                    mgs = 'b';
                }
                return rej(new Error(mgs + " is type of number"));
            }
            res(a + b);
        }
    )
}

let mul = (sum,h) => {
    return new Promise(
        (res, rej) => {
            if( typeof h != 'number'){
                return rej(new Error("h is type of number"));
            }
            res(sum * h);
        }
    )
}

let div = (mul) => {
    return new Promise(
        (res) => {
            res(mul / 2);
        }
    )
}

let square = (a,b,h) => {
    return add(a,b)
    .then(sum => mul(sum,h))
    .then(mul => div(mul))     
}
    
square(2,3,4)
.then(
    res => console.log("Dien tich hinh thang:", res)
)
.catch(
    err => console.log(err + '')
)

