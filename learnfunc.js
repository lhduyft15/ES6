//Ex1:
let mang = [1,2,3,4];

let changeArray = (element) => element * 3;
let newArray = mang.map(changeArray);
console.log(newArray);

//Ex2:
let add = (a ,b) => a + b ;
let sum = add(5,5);
console.log(sum);

//Ex3: 

let Output = (a,b) => console.log("I love code <", a + b);
let Learn = (hard) => {
    if (hard){
        return Output;
    }else{
        return () => console.log("I will here forever");
    }
}

Learn(true)(1,2);