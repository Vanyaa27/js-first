let score="33"  
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) //Score string value conveted into number
console.log(typeof valueInNumber);

let sc="33abc"
let valueInNum = Number(sc)
console.log(valueInNum);  //NaN -> Not a Number

/* null -> 0
undefined -> NaN
true -> 1
false -> 0 */

let logIn = 1
let boolLogIn = Boolean(logIn)
console.log(boolLogIn);

//coverting 0/1 => false/true (boolean values)
//"vanya" => true;  "" => false

let StrlogIn = String(logIn)
console.log(typeof StrlogIn) // string

let value = 4
let negval = -value //negation

//console.log(2+2)  add
//console.log(2-2)  subtract
//console.log(2*2)  multiply
//console.log(2**2) power
//console.log(2/2)  divide
//console.log(2%2)  mod/remainder

let a="abcd"
let b=" efgh"
let c=a+b      //abcd efgh

//console.log("1"+2+2) output -> 122
//console.log(1+2+"2") output -> 32

//console.log(+true) -> 1
//console.log(+"") -> 0