class user {
     constructor (username){
        this.username = username
     }

     logme(){
        console.log(`Username is ${this.username}`);
     }
}

class Teacher extends user{
    constructor(username, email, pass){
        super(username)
        this.email = email;
        this.pass = pass;
    }

    addcourse(){
        console.log(`New Course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "Chia@gmial.com", "741");
chai.addcourse()
console.log(chai);
chai.logme()
const masalachai = new user("MasalaChai")
masalachai.logme()
console.log(chai instanceof Teacher);



