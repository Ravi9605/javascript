 //E6
// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptpassword(){
//         return `${this.password}abc`
//     }

//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmial.com","741")
// console.log(chai.encryptpassword());
// console.log(chai.changeusername());

//behind the scene

function user(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
}

user.prototype.encryptpassword = function(){
            return `${this.password}abc`
}

user.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user("TeaWala", "TeaWala@gmial.com", "785421");
  console.log(tea.encryptpassword());
  console.log(tea.changeusername());
  
   
