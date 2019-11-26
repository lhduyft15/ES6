//Phan biet let and var-------------------------------------------
if(true){
    var a = 10;
    let b = 10;
}

console.log("a = ", a);
//console.log("b = ", b); //Error because let chi co hieu luc trong {}

//----------------------------------------------------------------

//Arrow function---------------------------------------------------------
let mang = [1,2,3,4];

//EX1:
//Normal
mang.forEach(function(value, index, array){
    console.log("index =", index , "value =" , value , "array =", array);
});
//Use arrow function
mang.forEach(
    (value , index, array) => {
        console.log("index =", index , "value =" , value , "array =", array);
    }
);

//EX2
function add(a , b){
    return a + b;
}
var addUseArrowFun = (a,b) => a + b ;

console.log("Func add normal",add(1,3));
console.log("Func add use arrow func",addUseArrowFun(2,5));

//EX3
var newArray = mang.map(function (value){
    return value * 3;
});
console.log("Create new array use normal way", newArray);

var newArray2 = mang.map( value => value * 3);
console.log("Create new array use arrow func", newArray2);

