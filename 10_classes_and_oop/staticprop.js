class user{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username : ${this.username}`);
    }

   static createId(){
        return Math.floor(Math.random()*1000)
    }

}

const ravi = new user("Ravi");
// console.log(ravi.createId())

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = username;
    }
}

const iphone = new Teacher("Iphone", "iphone@gmial.com")
iphone.logme();