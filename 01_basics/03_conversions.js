let score = "33bb"
let x = null//if undefined is there nan will come at line 9
console.log(typeof(score));
let valueInNumber=Number(score)
console.log(typeof(score))
console.log(typeof(valueInNumber))//even for ip 3bb its shows number
console.log(valueInNumber)
console.log(typeof(score));
let valueIn=Number(x)//converts null to 0
console.log(typeof(x))
console.log(typeof(valueIn))
console.log(valueIn)

// "33"->33
// "33bb"->NaN
// true->1:false->0:
let isLoggedIn=""
let bool=Boolean(isLoggedIn);
console.log(bool)
// 1->true:0->false
// ""->false
// "amit"->true
let xx=33
let stringNumber=String(xx)
console.log(typeof(stringNumber))
console.log(stringNumber)

console.log("***************operations***************")

let value=3
let negvalue=-value
console.log(negvalue)
console.log(3*"a")//nan is coming
console.log("a"+"b")
console.log("1"+2)
console.log("1"+2+2)
console.log(1+2+"2")
console.log(value++)
console.log(++value)



