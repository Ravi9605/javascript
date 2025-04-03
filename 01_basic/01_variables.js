const accountId = 144553
let accountEmail = "binjhaderavi04@gmail.com"
var accountPassword = "12345"//prefer not to use var because of 
//block scope and functional scope
accountCity="Amla"

let accountState// output = undefined 

// accountId = 3 // not change because it is const
accountEmail="Ravi@70gmail.com"
accountPassword="9605"
accountCity="Betul"

console.log(accountId);

console.table([accountId, accountEmail,accountPassword,accountCity, accountState])
