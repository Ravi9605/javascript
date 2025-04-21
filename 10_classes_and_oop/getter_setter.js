class user{
    constructor( email, pass){
        this.email = email;
        this.pass = pass;
    }

    get pass(){
        return this._pass.toUpperCase()
    }

    set pass(value){
        this._pass = value

    }

    get email(){
        return this.mail.toUpperCase();
    }

    set email(val){
        this.mail = val;
    }
}

const ravi = new user("Ravi@gmail.com", "abc741852dbsd")
console.log(ravi.pass);
console.log(ravi.email);

