const score =400 
// console.log(score);// output 400 

const balance = new Number(300)
// console.log(balance); // output [Number: 300]
//prorperties of number --> toString and after this we can appay the properties of string example length, chatAtand etc
// console.log(balance.toString());  // output 300 and it type is string

//fixed
// console.log(balance.toFixed(2));//value is fixed output is -->300.00

const num = 123.8966
// console.log(num.toPrecision(3));//output is --> 124 round off 

const number = 1000000
// console.log(number.toLocaleString('en-IN'));//by default the vlaue is USA but parameter set indian then formate indian


// console.log(Math);

// console.log(Math.abs(-4534))// output 4534
// console.log(Math.PI);  // vlaue of pi
// console.log(Math.floor(23.14322));// output 23

// console.log(Math.sqrt(25)); //output 5
// console.log(Math.pow(2,3)); //output - 8
// console.log(Math.min(2,5,7,9,3,100,205)); //output - 2
// console.log(Math.max(2,5,7,9,3,100,205)); //output - 205

//Math.random()
// console.log(Math.random());

const max = 10
const min = 0
console.log(Math.floor(Math.random()*(max-min+1))+min);













