function setusername(username){
    //complex DB calls
    this.username = username
}

function crateuser(username, email, password){
    setusername.call(this, username)
    this.email = email,
    this.password = password

}

const chai = new crateuser("chai", "Chia@gmail.com", "chia741")
console.log(chai);
// console.log(setusername.username);

