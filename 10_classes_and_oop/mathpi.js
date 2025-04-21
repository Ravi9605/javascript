const val = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(val)

// Object.defineProperty(val, "PI"{
//     writable: true,
//     enumerable: true,
//     configurable : true
// });

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"))

const chai = {
    name: "Ginger Chai",
    price: 290,
    idAvailable: true,

    isorder : function(){
        console.log("chai abhi nahi bani");
        
    }

}

// console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== "function"){
        console.log(`${key}  ${value}`)
    }
}

