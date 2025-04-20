// let myName = "Ravi    "
// let mychannel = "barikvision      "
// // console.log(myName.trim().length);
// console.log(myName.truelength)

// let myheros = ["Thor", "Spiderman"]


// let heropower = {
//     thor: "hammer",
//     spiderman : "sling",

//     getspiderpower: function(){
//         console.log(`spidy power is ${this.spiderman}`);
        
//     }
// }

// Object.prototype.ravi = function(){
//     console.log("Ravi is present in all object");
    
// }

// Array.prototype.heyravi = function(){
//     console.log(`Ravi says hello`);
// }

// // heropower.ravi();
// myheros.ravi()
// myheros.heyravi();
// // heropower.heyravi();

// // inheritance

// const user = {
//     name : "Chai ",
//     email: "Chai@gamil.com"
// }

// const teacher = {
//     makeVideo: true
// }

// const Teachingsupport = {
//         isAvailable : false
// }

// const TASupport = {
//     maleAssignment : 'JS assignement',
//     fullTime : true,
//     __proto__: Teachingsupport
// }

// // console.log(TASupport.isAvailable);

// //modern method to prototypeinheritance
// Object.setPrototypeOf(user, teacher)
// console.log(user.makeVideo);


let myName = "Ravi      ";
let mychannel = "Barikvisoion      "
console.log(myName.length);
console.log(mychannel.length);

String.prototype.truelength = function(){
    console.log(this);
    
    console.log(`True lenght --> ${this.trim().length}`);
    
}

myName.truelength();
mychannel.truelength();

"RaviBinjhade".truelength()
"iceTea".truelength()

